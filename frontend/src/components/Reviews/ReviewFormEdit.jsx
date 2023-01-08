import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateReview } from '../../store/reviews.js';
import "./Review.css"

const ReviewFormEdit = ({review, setShowReviewFormEdit}) => {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("");

    //this allows the backend to know who made the review
    const sessionUser = useSelector(state => state.session.user);

    // useEffect to prepopulate the form



    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: review.id,
            title: title,
            body: body,
            star_rating: rating,
            reviewer_id: sessionUser.id,
            listing_id: listingId
        }
        dispatch(updateReview(data));
        setShowReviewFormEdit(false);
    }



    return(
        <div id="review-container">
            <div id="review-instructions">
                <p>Please leave a review of your stay</p>
            </div>
            <div id="review-form">
                <form onSubmit={handleSubmit}>
                    {/* <p>Location</p>
                    <input
                        type="range"
                        min="1" max="5"
                        value="3"
                    />
                    <p>Value: </p>
                    <br /> */}
                    <input
                        type="text"
                        placeholder="Review title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <textarea
                        placeholder="Write your review here"
                        value={body}
                        cols="30" rows="10"
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <br />
                    <button>Submit Review</button>
                </form>

            </div>
        </div>
    )
}

export default ReviewFormEdit;
