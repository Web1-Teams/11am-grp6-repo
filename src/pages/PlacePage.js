import React, { useState } from "react";
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
    const [newComment, setNewComment] = useState('');
    const [ratings, setRatings] = useState({
        food: null,
        service: null,
        price: null,
        atmosphere: null,
    });

    // Favorite state
    const [isHeartClicked, setIsHeartClicked] = useState(() => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const place = storedState.find((item) => item.id === parseInt(id));
        return place ? place.isHeartClicked : false;
    });

    // Visited state
    const [isCheckClicked, setIsCheckClicked] = useState(() => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const place = storedState.find((item) => item.id === parseInt(id));
        return place?.isCheckClicked || false;
    });

    // Function to update localStorage
    const updateLocalStorage = (updatedPlace) => {
        const storedState = JSON.parse(localStorage.getItem("places")) || [];
        const updatedState = storedState.map((item) =>
            item.id === updatedPlace.id
                ? { ...item, ...updatedPlace } // Merge changes into the existing object
                : item
        );

        // If the object doesn't exist, add it
        if (!storedState.some((item) => item.id === updatedPlace.id)) {
            updatedState.push(updatedPlace);
        }

        localStorage.setItem("places", JSON.stringify(updatedState));
    };

    // Favorite button click handler
    const handleHeartClick = (e) => {
        e.stopPropagation();
        const newHeartState = !isHeartClicked;
        setIsHeartClicked(newHeartState);

        // Update only the isHeartClicked property
        const updatedPlace = { id: parseInt(id), isHeartClicked: newHeartState, isCheckClicked };
        updateLocalStorage(updatedPlace);
    };

    // Visited button click handler
    const handleCheckClick = (e) => {
        e.stopPropagation();
        const newCheckState = !isCheckClicked;
        setIsCheckClicked(newCheckState);

        // Update only the isCheckClicked property
        const updatedPlace = { id: parseInt(id), isHeartClicked, isCheckClicked: newCheckState };
        updateLocalStorage(updatedPlace);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);
            setNewComment('');
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

    return (
        <div style={{ marginTop: '50px', padding: '0px' }}>
            <Link to="/">Go Back</Link>
            <PlacePageSlider images={[place.image, place.image2, place.image3]} />

            <div className="name-heart-visited">
                <h1>{place.name}</h1>
                <div>
                    <button
                        className={`favorite-btn ${isHeartClicked ? "active" : ""}`}
                        onClick={handleHeartClick}
                    >
                        <i className="fa-solid fa-heart"></i>
                        <span className="hide_after">Favorite</span>
                    </button>
                </div>

                <div>
                    <button
                        className={`visited-btn ${isCheckClicked ? "active" : ""}`}
                        onClick={handleCheckClick}
                    >
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="hide_after">Visited</span>
                    </button>
                </div>
            </div>

            <div className="place-details">
                <div className="Info">
                    <p className="short-info">{place.description}</p>
                    <p className="long-info" style={{ fontSize: 25 }}>{place.longDescription}</p>
                </div>

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
                <Footer_cat c1="Cafes" c1tag1="Family Type" c1tag2="Locations" c1tag3="Pictures" c1tag4="Best Sellers" c1tag5="Help" />
                <Footer_cat c1="Play Centers" c1tag1="Support" c1tag2="Locations" c1tag3="Know More" c1tag4="Reviews" c1tag5="Help" />
            </Footer>
        </div>
    );
};

export default PlacePage;
