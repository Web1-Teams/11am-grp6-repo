import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./PlacePage.css";
import PlacePageSlider from "../components/PlacePageSlider";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

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

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [username, setUsername] = useState("");
  // Constants
  const ratingValues = {
    "😭": 0.2,
    "😟": 0.4,
    "😐": 0.6,
    "😊": 0.8,
    "😍": 1,
  };
  const [isHeartClicked, setIsHeartClicked] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const place = storedState.find((item) => item.id === parseInt(id));
    return place ? place.isHeartClicked : false;
  });
  const [isCheckClicked, setIsCheckClicked] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const place = storedState.find((item) => item.id === parseInt(id));
    return place?.isCheckClicked || false;
  });
  // Load states from localStorage
  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const currentPlace =
      storedState.find((item) => item.id === parseInt(id)) || {};
    setIsHeartClicked(currentPlace.isHeartClicked || false);
    setIsCheckClicked(currentPlace.isCheckClicked || false);
    const temp = localStorage.getItem("currentUser");
    const user = JSON.parse(temp);
    const storedUsername = user.userName; // هيك تم الوصول لليوزر نيم في اللوكال ستورج
    setUsername(storedUsername);
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
    setComments(storedComments);
  }, [id]);

  // Save place state to localStorage
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
    
    const handleHeartClick = (e) => {
        e.stopPropagation();
        const newHeartState = !isHeartClicked;
        setIsHeartClicked(newHeartState);


    // Update only the isHeartClicked property
    const updatedPlace = {
      id: parseInt(id),
      isHeartClicked: newHeartState,
      isCheckClicked,
    };

    updateLocalStorage(updatedPlace);
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
      // alert("Please rate all categories!");
      toast.error("Please provide rating for all categories.", {
        icon: "⚠️",
      });
    }
  };

  const handleCheckClick = (e) => {
    e.stopPropagation();
    const newCheckState = !isCheckClicked;
    setIsCheckClicked(newCheckState);

    // Update only the isCheckClicked property
    const updatedPlace = {
      id: parseInt(id),
      isHeartClicked,
      isCheckClicked: newCheckState,
    };
    updateLocalStorage(updatedPlace);
  };

  const extractCoordinates = (url) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = url.match(regex);
    return match
      ? { lat: parseFloat(match[1]), lng: parseFloat(match[2]) }
      : null;
  };

  if (!place) {
    return (
      <div>
        Place not found. <Link to="/HomePage">Go Back</Link>
      </div>
    );
  }

  const coordinates = extractCoordinates(place.location);

  const tags = Object.keys(place).filter(
    (key) =>
      place[key] === true &&
      !["isHeartClicked", "isCheckClicked", "rating"].includes(key)
  );

  return (
    <div className="ssh-placePage-body">
      <div
        className="ssh-place-page"
        style={{ marginTop: "40px", padding: "0px" }}
      >
        <div className="ssh-slider_and_dicription">
          <PlacePageSlider
            className="ssh-sliderr"
            images={[place.image, place.image2, place.image3]}
          />
          <div className="SL-container">
            <section className="NamePlace">{place.name}</section>
            <p className="short-ssh-Info">{place.description}</p>
            <p className="long-ssh-Info">{place.longDescription}</p>
          </div>

          {/* added div for displayment */}
        </div>
        <div className="ssh-place-tags">
          <div>
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <span key={index} className="ssh-place-tag">
                  {tag}
                </span>
              ))
            ) : (
              <p>No tags available.</p>
            )}
          </div>
        </div>
        <div className="FeedBack-heart-visited">
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="ssh-feedback-button"
          >
            Leave Feedback
          </button>

          {isFeedbackOpen && (
            <div className="sh-feedback-popup">
              <div className="ssh-feedback-content">
                <div className="ssh-rating-section">
                  <h3 className="ssh-RateName">Rate Categories:</h3>
                  {["food", "service", "price", "atmosphere"].map(
                    (category) => (
                      <div key={category} className="ssh-rating-category">
                        <label>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                          :
                        </label>
                        {["😭", "😟", "😐", "😊", "😍"].map((emoji) => (
                          <button
                            key={emoji}
                            className={`ssh-rating-emoji ${
                              ratings[category] === emoji ? "selected" : ""
                            }`}
                            onClick={() => handleRatingClick(category, emoji)}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    )
                  )}
                </div>

                <div className="ssh-feedback-buttons">
                  <button
                    onClick={handleFeedbackSubmit}
                    className="ssh-submit-feedback"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setIsFeedbackOpen(false)}
                    className="close-popup"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="NFV-container">
            <div className="buttons-container">
              <button
                className={`ssh-favorite-btn ${isHeartClicked ? "active" : ""}`}
                onClick={handleHeartClick}
              >
                <i className="fa-solid fa-heart ssh-heart"></i>
              </button>
              <button
                className={`ssh-visited-btn ${isCheckClicked ? "active" : ""}`}
                onClick={handleCheckClick}
              >
                <i className="fa-solid fa-circle-check ssh-visited"></i>
              </button>
            </div>
          </div>
        </div>

        {showEmoji && (
          <div className="ssh-emoji-overlay">
            🎉
            <p>You are the first to comment!</p>
          </div>
        )}

        <div className="feedback-map-container">
          {/* Feedback Section */}

          {coordinates ? (
            <div className="Hamza-map">
              <h2 className="ssh-location">Location:</h2>
              <div className="ssh-map-container">
                <LoadScript googleMapsApiKey="AIzaSyDEsM7fwWviSUMUBW7HUDtVAJ_gEsg_jSU">
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "400px" }}
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

        <div className="place-details">
          <div className="comment-section">
            <h2>Comments</h2>
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add your comment here..."
                required
              ></textarea>
              <div className="now">
                <button type="submit" className="submit-comment">
                  Add Comment
                </button>
              </div>
            </form>
            <p>
              {" "}
              <span className="your-comment ">Comments list</span>{" "}
            </p>
            <div className="comments-list-container">
              <ul className="comments-list">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <li key={index} className="comment-item">
                      <strong>
                        <i className="fa-solid fa-circle-user ssha-user"></i>{" "}
                        {username}:
                      </strong>
                      <p>{comment}</p>
                    </li>
                  ))
                ) : (
                  <p className="no-comments">
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
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
      <Toaster position="top-center" />
    </div>
  );
};

export default PlacePage;
