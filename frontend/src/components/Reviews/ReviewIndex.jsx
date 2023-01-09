import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, getReviews } from "../../store/reviews";
import ReviewIndexItem from "./ReviewIndexItem";
import './Review.css';
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews);
    const {listingId} = useParams();

    const numReviews = reviews.length;
    let totalRating = 0;
    reviews.forEach((review) => {
        totalRating += review.starRating
    })
    const avgRating = totalRating / numReviews;

    //review stuff
    const [showReviewForm, setShowReviewForm] = useState(false)
    const toggleReviewForm = () => {
        setShowReviewForm(!showReviewForm);
    }


    useEffect(() => {
        dispatch(fetchReviews(listingId));
    }, [listingId, dispatch])

    if(!reviews){
        return null;
    }

    return(
        <>

            <div className="title-show">
                <i className="fa-solid fa-star show-page-icon" />
                {numReviews == 0 ? 5 : avgRating} •
                {" "}
                {numReviews}
                {numReviews == 1 ? ' Review' : ' Reviews'}
            </div>
            <div id="write-a-review-button" onClick={toggleReviewForm}>Write a review</div>

            {/* only appear if user clicks the toggleReviewForm button above */}
            {showReviewForm ? < ReviewForm setShowReviewForm = {setShowReviewForm}/> : ""}

            <div id="all-reviews">
                {reviews.map((review) => <ReviewIndexItem review={review} key={review.id}/> )}
            </div>
        </>
    )
}

export default ReviewIndex;
