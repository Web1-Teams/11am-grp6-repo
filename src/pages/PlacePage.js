import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PlacePage.css";

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
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

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

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);
            setNewComment('');
        }
    };

    if (!place) {
        return <div>Place not found. <Link to="/">Go Back</Link></div>;
    }
    //This is how we show the tag now its name is key 
    const tags = Object.keys(place)
        .filter((key) => place[key] === true && !["isHeartClicked", "isCheckClicked", "rating"].includes(key));

    return (
        <div style={{ marginTop: '80px', padding: '20px' }}> {/* Adjust margin for navbar */}
            <Link to="/">Go Back</Link>
            <h1>{place.name}</h1>
            <div className="place-details">
                <div className="image-and-tags">
                    <img
                        src={place.image}
                        alt={place.name}
                        className="place-page-image"
                    />
                    <div className="place-tags">
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
                <div className="place-extra-details">
                    <h3>Description:</h3>
                    <p>{place.description}</p>
                    <h3>Location:</h3>
                    <a
                        href={place.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="place-location-link"
                    >
                        View on Google Maps
                    </a>
                </div>
            </div>

            {/* Feedback Button */}
            <button onClick={() => setIsFeedbackOpen(true)} className="feedback-button">
                Leave Feedback
            </button>

            {/* Feedback Popup */}
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
        </div>
    );
};

export default PlacePage;
