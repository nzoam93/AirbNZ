import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing, createListing, updateListing } from '../../store/listings.js';
import { getReview, fetchReview, createReview, updateReview } from '../../store/reviews.js';
import "./Review.css"

const ReviewForm = () => {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("");

    const [isEdit, setIsEdit] = useState(false);

    const listing = useSelector(getListing(listingId));
    const sessionUser = useSelector(state => state.session.user);

    // useEffect



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
    }

    return(
        <div id="review-container">
            <div id="review-instructions">
                <p>Please leave a review of your stay</p>
            </div>
            <div id="review-form">
                <form onSubmit={handleSubmit}>
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

export default ReviewForm;
