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

    // State management
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [ratings, setRatings] = useState({
        food: null,
        service: null,
        price: null,
        atmosphere: null,
    });

    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [isCheckClicked, setIsCheckClicked] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);

    // Constants
    const ratingValues = {
        "😭": 0.2,
        "😟": 0.4,
        "😐": 0.6,
        "😊": 0.8,
        "😍": 1,
    };

    // Load states from localStorage
    useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const currentPlace = storedState.find((item) => item.id === parseInt(id)) || {};
        setIsHeartClicked(currentPlace.isHeartClicked || false);
        setIsCheckClicked(currentPlace.isCheckClicked || false);

        const storedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
        setComments(storedComments);
    }, [id]);

    // Save place state to localStorage
    const updateLocalStorage = (updatedPlace) => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const updatedState = storedState.filter((item) => item.id !== updatedPlace.id);
        updatedState.push(updatedPlace);
        localStorage.setItem("places", JSON.stringify(updatedState));
    };

    // Handlers
    const handleHeartClick = () => {
        const newState = !isHeartClicked;
        setIsHeartClicked(newState);
        updateLocalStorage({ id: parseInt(id), isHeartClicked: newState, isCheckClicked });
    };

    const handleCheckClick = () => {
        const newState = !isCheckClicked;
        setIsCheckClicked(newState);
        updateLocalStorage({ id: parseInt(id), isHeartClicked, isCheckClicked: newState });
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() && !comments.includes(newComment.trim())) {
            const updatedComments = [...comments, newComment.trim()];
            setComments(updatedComments);
            localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
            setNewComment("");
            setShowEmoji(comments.length === 0); // Show emoji only for the first comment
        }
    };

    const handleRatingClick = (category, emoji) => {
        setRatings((prev) => ({ ...prev, [category]: emoji }));
    };

    const handleFeedbackSubmit = () => {
        if (Object.values(ratings).every(Boolean)) {
            const totalRating = (
                ratingValues[ratings.food] * 39.5 +
                ratingValues[ratings.service] * 24.5 +
                ratingValues[ratings.price] * 19.5 +
                ratingValues[ratings.atmosphere] * 16.5
            ).toFixed(2);

            updatePlaceRating(place.id, totalRating);
            setIsFeedbackOpen(false);
        } else {
            alert("Please rate all categories!");
        }
    };

    const extractCoordinates = (url) => {
        const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        const match = url.match(regex);
        return match ? { lat: parseFloat(match[1]), lng: parseFloat(match[2]) } : null;
    };

    if (!place) {
        return (
            <div>
                Place not found. <Link to="/">Go Back</Link>
            </div>
        );
    }

    const coordinates = extractCoordinates(place.location);
    const tags = Object.keys(place).filter(
        (key) => place[key] === true && !["isHeartClicked", "isCheckClicked", "rating"].includes(key)
    );

    return (
        <div className="place-page" style={{ marginTop: "50px", padding: "0px" }}>
            <Link to="/">Go Back</Link>
            <PlacePageSlider images={[place.image, place.image2, place.image3]} />

            {showEmoji && (
                <div className="emoji-overlay">
                    🎉
                    <p>You are the first to comment!</p>
                </div>
            )}
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
                <h1>{place.name}</h1>
                <button
                    className={`favorite-btn ${isHeartClicked ? "active" : ""}`}
                    onClick={handleHeartClick}
                >
                    <i className="fa-solid fa-heart"></i> Favorite
                </button>
                <button
                    className={`visited-btn ${isCheckClicked ? "active" : ""}`}
                    onClick={handleCheckClick}
                >
                    <i className="fa-solid fa-circle-check"></i> Visited
                </button>
            </div>

            <div className="place-details">
                <div className="Info">
                   
                   {/* added div for displayment */}
                   <div>
                   <p className="short-info">{place.description}</p>
                    <p className="long-info" style={{ fontSize: 25 }}>
                        {place.longDescription}
                    </p>

                   </div>
                   
                    <div className="comments-list-container">
                       <p>  <span className="your-comment ">YOUR COMMINTS</span> </p>
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
                </div>

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
            </div>

               
          
                {/* Feedback Section */}
                <button onClick={() => setIsFeedbackOpen(true)} className="feedback-button">
                    Leave Feedback
                </button>
                
                {isFeedbackOpen && (
                    <div className="feedback-popup">
                        <div className="feedback-content">
                            <h2>Leave Feedback</h2>
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

 {coordinates ? (   
                    <div>
                          <h2 className="location">Location:</h2>
                        <div  className="map-container">

                        <LoadScript googleMapsApiKey="AIzaSyDEsM7fwWviSUMUBW7HUDtVAJ_gEsg_jSU">
                            <GoogleMap
                                mapContainerStyle={{ width: "calc(100%-70px)", height: "400px" }}
                                center={coordinates}
                                zoom={15}
                            >
                                <Marker position={coordinates} />
                            </GoogleMap>
                        </LoadScript>
                        </div>
                        
                    </div>
                ) : (
                    <p>Location information is not available.</p>
                )}
            </div>
           

            <Footer BrandName="Visit Me">
                <Footer_cat
                    c1="Restaurants"
                    c1tag1="Family Type"
                    c1tag2="Locations"
                    c1tag3="Generic"
                    c1tag4="Best Sellers"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Archaeological Sites"
                    c1tag1="Pictures"
                    c1tag2="Locations"
                    c1tag3="More Info"
                    c1tag4="Most Visited"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Amusement Parks"
                    c1tag1="Childish"
                    c1tag2="Locations"
                    c1tag3="Reviews"
                    c1tag4="More Info"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Parks"
                    c1tag1="More Info"
                    c1tag2="Locations"
                    c1tag3="Photos"
                    c1tag4="Entertainment"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Cafés"
                    c1tag1="Family Type"
                    c1tag2="Locations"
                    c1tag3="Pictures"
                    c1tag4="Best Sellers"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Play Centers"
                    c1tag1="Support"
                    c1tag2="Locations"
                    c1tag3="Know More"
                    c1tag4="More Info"
                    c1tag5="Help"
                />
            </Footer>
        </div>
    );
};

export default PlacePage;
