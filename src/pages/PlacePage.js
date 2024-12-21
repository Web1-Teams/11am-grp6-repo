
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./PlacePage.css";
import PlacePageSlider from '../components/PlacePageSlider';
import Footer from '../components/Footer';
import Footer_cat from '../components/Footer_cat';


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
        <div style={{ marginTop: '50px', padding: '0px' }}> {/* Adjust margin for navbar */}
            <Link to="/">Go Back</Link>
     <PlacePageSlider/>
            <h1>{place.name}</h1>
            <div className="place-details">
                <div className="image-and-tags">
                   
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

    <Footer BrandName="visit me "  >
         
         < Footer_cat  c1="resturents" c1tag1="family type" c1tag2="locations" c1tag3="generic" c1tag4="best sellers" c1tag5="help"/>
         < Footer_cat  c1="Archaeological Sites" c1tag1="picturs" c1tag2="locations" c1tag3="more info" c1tag4="most visited" c1tag5="help"/>
         < Footer_cat  c1="Amusement Parks" c1tag1="childesh" c1tag2="locations" c1tag3="reviews" c1tag4="more info" c1tag5="help"/>
         < Footer_cat  c1="Parks" c1tag1="more info" c1tag2="locations" c1tag3="photos" c1tag4="intertetment" c1tag5="help"/>
         < Footer_cat  c1="Cafés" c1tag1="family type" c1tag2="locations" c1tag3="pics" c1tag4="best sellers" c1tag5="help"/>
         < Footer_cat  c1="Play Centers" c1tag1="support" c1tag2="locations" c1tag3="know more " c1tag4="reviews" c1tag5="help"/>
            </Footer>

        </div>
    );
};

export default PlacePage;
