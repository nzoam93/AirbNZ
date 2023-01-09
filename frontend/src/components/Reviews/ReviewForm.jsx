import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, updateReview } from '../../store/reviews.js';
import "./Review.css"

const ReviewForm = ({setShowReviewForm}) => {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(3);

    //this allows the backend to know who made the review
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            body: body,
            star_rating: rating,
            reviewer_id: sessionUser.id,
            listing_id: listingId
        }
        dispatch(createReview(data));
        setShowReviewForm(false); //close the form
    }

    return(
        <div id="review-form-container">
            <form id="review-form" onSubmit={handleSubmit}>
                <input
                    id="review-title-form"
                    type="text"
                    placeholder="Review title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <textarea
                    id="review-body-form"
                    placeholder="Write your review here"
                    value={body}
                    cols="30" rows="10"
                    onChange={(e) => setBody(e.target.value)}
                />
                <br />
                <div id="star-rating-container">
                    <p>Overall Satisfaction</p>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <p id="review-star">{rating}</p>
                    <i className="fa-solid fa-star fa-0.5x" />
                    <br />
                </div>
                <button className="review-button">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;
