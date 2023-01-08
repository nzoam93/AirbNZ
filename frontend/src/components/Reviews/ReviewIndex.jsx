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

    const numReviews = useSelector(state => state.reviews.length)


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
                4.7 • {numReviews} Review
            </div>
            <div id="all-reviews">
                {reviews.map((review) => <ReviewIndexItem review={review} key={review.id}/> )}
            </div>
        </>
    )
}

export default ReviewIndex;
