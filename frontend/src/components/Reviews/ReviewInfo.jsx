import { useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";

const ReviewInfo = () => {
    const reviews = useSelector(getReviews);

    const numReviews = reviews.length;
    let totalRating = 0;
    reviews.forEach((review) => {
        totalRating += review.starRating
    })
    const avgRating = totalRating / numReviews;

    return(
        <>
            <i className="fa-solid fa-star fa-0.5x bold" />
            <span id="price-span">{numReviews == 0 ? 5 : avgRating} • <a className="underline" href="#reviews-show">{reviews.length} {reviews.length == 1 ? 'Review' : 'Reviews'}</a> </span>
        </>
    )
}

export default ReviewInfo;
