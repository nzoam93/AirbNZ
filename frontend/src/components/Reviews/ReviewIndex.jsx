import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, getReviews } from "../../store/reviews";
import ReviewIndexItem from "./ReviewIndexItem";
import './Review.css';
import { useParams } from "react-router-dom";

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews);
    const {listingId} = useParams();

    useEffect(() => {
        dispatch(fetchReviews(listingId));
    }, [listingId, dispatch])

    console.log(reviews)

    if(!reviews){
        return null;
    }

    return(
        <>
            <div id="all-reviews">
                {reviews.map((review) => <ReviewIndexItem review={review} key={review.id}/> )}
            </div>
        </>
    )
}

export default ReviewIndex;
