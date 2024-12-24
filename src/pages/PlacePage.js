
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
   //fav
   const [isHeartClicked, setIsHeartClicked] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];// اذا كانت البيانات موجودة بحولها من مجرد داتا لى كائن حقيقي في جافا سكريبت
    const place = storedState.find((item) => item.id === parseInt(id)); 
    return place ? place.isHeartClicked : false; 
});
const updateLocalStorage = (updatedPlace) => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const updatedState = storedState.map((item) => 
        item.id === updatedPlace.id ? { ...item, isHeartClicked: updatedPlace.isHeartClicked } : item
    );
    if (!storedState.find(item => item.id === updatedPlace.id)) {
        updatedState.push(updatedPlace);
    }
    localStorage.setItem("places", JSON.stringify(updatedState));
}; 
const handleHeartClick = (e) => {
    e.stopPropagation();//عشان بس يعدل هون وما يعدل عباقي الشغلات (منعه من التعديل على الاب)
    const newHeartState = !isHeartClicked;
    setIsHeartClicked(newHeartState);

    updateLocalStorage({ id: place.id, isHeartClicked: newHeartState });
};

    //end of fav
    //visited
  

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

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);//trim  بتفحص اذا الكومنت كلام حقيقي ولا بس فراغات //نسخة من الكومنتس السابقة بالاضافة للجديدة
            setNewComment('');//انتقال الى حقل فارغ لكل كومنت
            //طبعا الطول هو كم كومنت موجود حاليا
            if (comments.length === 0) {// اذا رسمي كان مافي ولا كومنت قبل هيك
                setShowEmoji(true);//خلينا حالة الايموجي ترو عشان يظهر الايموجي
                setTimeout(() => setShowEmoji(false), 3000); // مدة ظهور الايموجي 3 ثواني
            }
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
                <PlacePageSlider />
                
                {showEmoji && (
                    <div className="emoji-overlay">
                        🎉
                        <p>You are the first to comment!</p>
                    </div>
                )}
                
                <h1>{place.name}</h1>
                
                <div className="place-details">
                    {/* Image and Tags Section */}
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
                    
                    {/* Info Section */}
                    <section className="Info">
                        <h1>{place.name}</h1>
                        <p>{place.description}</p>
                        <div>
                            <button
                                className={`favorite-btn ${isHeartClicked ? "active" : ""}`}
                                onClick={handleHeartClick}
                            >
                                <i className="fa-solid fa-heart"></i>
                                <p>Favorite</p>
                            </button>
                        </div>
                        <p style={{ fontSize: 25 }}>{place.longDescription}</p>
                    </section>
                    
                    {/* Location Section */}
                    <div className="place-extra-details">
                        <h2>Location:</h2>
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
                
                {/* Tags Section */}
                <div className="place-tags">
                    {place.tags.map((tag, index) => (
                        <span key={index} className="place-tag">
                            {tag}
                        </span>
                    ))}
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
                
                {/* Comment Section */}
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
                
                {/* Footer Section */}
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
    }     
export default PlacePage;
