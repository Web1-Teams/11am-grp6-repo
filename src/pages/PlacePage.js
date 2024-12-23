import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./PlacePage.css";
import PlacePageSlider from "../components/PlacePageSlider";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";

const PlacePage = ({ places, updatePlaceRating }) => {
    const { id } = useParams();
    const place = places.find((r) => r.id === parseInt(id));

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [ratings, setRatings] = useState({
        food: null,
        service: null,
        price: null,
        atmosphere: null,
    });


    const [isHeartClicked, setIsHeartClicked] = useState(() => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const currentPlace = storedState.find((item) => item.id === parseInt(id));
        return currentPlace ? currentPlace.isHeartClicked : false;
    });

    const [isCheckClicked, setIsCheckClicked] = useState(() => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const currentPlace = storedState.find((item) => item.id === parseInt(id));
        return currentPlace?.isCheckClicked || false;
    });

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
        setComments(storedComments);
    }, [id]);


    const updateLocalStorage = (updatedPlace) => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const updatedState = storedState.map((item) =>
            item.id === updatedPlace.id
                ? { ...item, ...updatedPlace }
                : item
        );
        if (!storedState.some((item) => item.id === updatedPlace.id)) {
            updatedState.push(updatedPlace);
        }
        localStorage.setItem("places", JSON.stringify(updatedState));
    };
    
    //end of visited
const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
//متغير state عشان نتحكم بالحالة مبدئيا false عشان يكون الايموجي مختفي 
const [showEmoji, setShowEmoji] = useState(false);


    const ratingValues = {
        "😭": 0.2,
        "😟": 0.4,
        "😐": 0.6,
        "😊": 0.8,
        "😍": 1,
    };

    const handleRatingClick = (category, emoji) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [category]: emoji,
        }));
    };

    const handleFeedbackSubmit = () => {
        if (
            ratings.food &&
            ratings.service &&
            ratings.price &&
            ratings.atmosphere
        ) {
            const foodScore = ratingValues[ratings.food] * 39.5;
            const serviceScore = ratingValues[ratings.service] * 24.5;
            const priceScore = ratingValues[ratings.price] * 19.5;
            const atmosphereScore = ratingValues[ratings.atmosphere] * 16.5;

            const totalRating = foodScore + serviceScore + priceScore + atmosphereScore;
            updatePlaceRating(place.id, totalRating.toFixed(2));
            setIsFeedbackOpen(false);
        } else {
            alert('Please rate all categories!');
        }
    };

    const handleHeartClick = (e) => {
        e.stopPropagation();
        const newHeartState = !isHeartClicked;
        setIsHeartClicked(newHeartState);
        const updatedPlace = { id: parseInt(id), isHeartClicked: newHeartState, isCheckClicked };
        updateLocalStorage(updatedPlace);
    };

    const handleCheckClick = (e) => {
        e.stopPropagation();
        const newCheckState = !isCheckClicked;
        setIsCheckClicked(newCheckState);
        const updatedPlace = { id: parseInt(id), isHeartClicked, isCheckClicked: newCheckState };
        updateLocalStorage(updatedPlace);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() && !comments.includes(newComment.trim())) {
            const updatedComments = [...comments, newComment.trim()];
            setComments(updatedComments);
            setNewComment("");
            localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        }
    };

    const extractCoordinates = (url) => {
        const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        const match = url.match(regex);
        if (match) {
            return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };

        }
        return null;
    };

    if (!place) {
        return <div>Place not found. <Link to="/">Go Back</Link></div>;
    }


    const coordinates = extractCoordinates(place.location);
    const tags = Object.keys(place)
    .filter((key) => place[key] === true && !["isHeartClicked", "isCheckClicked", "rating"].includes(key));

    return (
        <div style={{ marginTop: "50px", padding: "0px" }}>
            <Link to="/">Go Back</Link>
            <PlacePageSlider images={[place.image, place.image2, place.image3]} />
            {showEmoji && (                       
                    <div className="emoji-overlay"> {/'&&' عشان تعرض الايموجي بواجهة المسنخدم/}
                        🎉
                        <p>You are the first to comment!</p>
                    </div>
                )}
                
                  {/* Image and Tags Section */}
                <div className="place-tags">
                            <div>
                            {tags.length > 0 ? (
                                tags.map((tag, index) => (
                                    <span key={index} className="place-tag">
                                        {tag}
                                    </span>
                                ))
                            ) : (
                                <p>No tags available.</p>
                            )}
                      </div>
                 </div>


                 <div className="name-heart-visited">
    <div className="NFV-container">
        <h1>{place.name}</h1>
        <div className="buttons-container">
            <button
                className={`favorite-btn ${isHeartClicked ? "active" : ""}`}
                onClick={handleHeartClick}
            >
              <i className="fa-solid fa-heart"></i>
                <span className="hide_after">Favorite</span>
            </button>
            <button
                className={`visited-btn ${isCheckClicked ? "active" : ""}`}
                onClick={handleCheckClick}
            >
                <i className="fa-solid fa-circle-check"></i>
                <span className="hide_after">Visited</span>
            </button>
        </div>
    </div>
</div>
<div className="Info">
                    <p className="short-info">{place.description}</p>
                    <p className="long-info" style={{ fontSize: 25 }}>{place.longDescription}</p>
                </div> 
            <div className="place-details">
                {coordinates ? (
                    <div className="map-container">
                        <h2>Location:</h2>
                        <LoadScript googleMapsApiKey="AIzaSyDEsM7fwWviSUMUBW7HUDtVAJ_gEsg_jSU">
                            <GoogleMap
                                mapContainerStyle={{
                                    width: "500px",
                                    height: "400px",
                                }}
                                center={coordinates}
                                zoom={15}
                            >
                                <Marker position={coordinates} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                ) : (
                    <p>Location information is not available.</p>
                )}
            </div>

            <button onClick={() => setIsFeedbackOpen(true)} className="feedback-button">
                    Leave Feedback
                </button>
                
                {isFeedbackOpen && (
                    <div className="feedback-popup">
                        <div className="feedback-content">
                            <div className="rating-section">
                                <h3>Rate Categories:</h3>
                                {["food", "service", "price", "atmosphere"].map((category) => (
                                    <div key={category} className="rating-category">
                                        <label>{category.charAt(0).toUpperCase() + category.slice(1)}:</label>
                                        {["😭", "😟", "😐", "😊", "😍"].map((emoji) => (
                                            <button
                                                key={emoji}
                                                className={`rating-emoji ${
                                                    ratings[category] === emoji ? "selected" : ""
                                                }`}
                                                onClick={() => handleRatingClick(category, emoji)}
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="feedback-buttons">
                                <button onClick={handleFeedbackSubmit} className="submit-feedback">
                                    Submit
                                </button>
                                <button onClick={() => setIsFeedbackOpen(false)} className="close-popup">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            <div className="comment-section">
                <h2>Comments</h2>
                <form onSubmit={handleCommentSubmit} className="comment-form">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write your comment here..."
                        required
                    ></textarea>
                    <button type="submit" className="submit-comment">
                        Add Comment
                    </button>
                </form>
                <ul className="comments-list">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <li key={index} className="comment-item">
                                {comment}
                            </li>
                        ))
                    ) : (
                        <p className="no-comments">No comments yet. Be the first to comment!</p>
                    )}
                </ul>
            </div>

            <Footer BrandName="Visit Me">
                <Footer_cat c1="Restaurants" c1tag1="Family Type" c1tag2="Locations" c1tag3="Generic" c1tag4="Best Sellers" c1tag5="Help" />
                <Footer_cat c1="Archaeological Sites" c1tag1="Pictures" c1tag2="Locations" c1tag3="More Info" c1tag4="Most Visited" c1tag5="Help" />
                <Footer_cat c1="Amusement Parks" c1tag1="Childish" c1tag2="Locations" c1tag3="Reviews" c1tag4="More Info" c1tag5="Help" />
                <Footer_cat c1="Parks" c1tag1="More Info" c1tag2="Locations" c1tag3="Photos" c1tag4="Entertainment" c1tag5="Help" />
                <Footer_cat c1="Cafés" c1tag1="Family Type" c1tag2="Locations" c1tag3="Pictures" c1tag4="Best Sellers" c1tag5="Help" />
                <Footer_cat c1="Play Centers" c1tag1="Support" c1tag2="Locations" c1tag3="Know More" c1tag4="Reviews" c1tag5="Help" />
            </Footer>
        </div>
    );
};

export default PlacePage;
