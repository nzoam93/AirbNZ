import { useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";
import "./ReviewProgressBar.css"

const ReviewProgressBar = () => {
    const reviews = useSelector(getReviews);
    const numReviews = reviews.length;

    let totalCleanlinessRating = 0;
    reviews.forEach((review) => {
        totalCleanlinessRating += review.cleanliness;
    })
    const avgCleanlinessRating = Math.round((totalCleanlinessRating / numReviews) * 10) / 10;

    let totalCommunicationRating = 0;
    reviews.forEach((review) => {
        totalCommunicationRating += review.communication;
    })
    const avgCommunicationRating = Math.round((totalCommunicationRating / numReviews) * 10) / 10;

    let totalCheckinRating = 0;
    reviews.forEach((review) => {
        totalCheckinRating += review.checkIn;
    })
    const avgCheckinRating = Math.round((totalCheckinRating / numReviews) * 10) / 10;

    let totalAccuracyRating = 0;
    reviews.forEach((review) => {
        totalAccuracyRating += review.accuracy;
    })
    const avgAccuracyRating = Math.round((totalAccuracyRating / numReviews) * 10) / 10;

    let totalLocationRating = 0;
    reviews.forEach((review) => {
        totalLocationRating += review.location;
    })
    const avgLocationRating = Math.round((totalLocationRating / numReviews) * 10) / 10;

    let totalValueRating = 0;
    reviews.forEach((review) => {
        totalValueRating += review.value;
    })
    const avgValueRating = Math.round((totalValueRating / numReviews) * 10) / 10;

    let avgOverallRating = Math.round((avgCleanlinessRating + avgCommunicationRating + avgCheckinRating
        + avgAccuracyRating + avgLocationRating + avgValueRating) / 6 * 10) / 10;

    return(
        <>
            <div className="title-show">
                <i className="fa-solid fa-star show-page-icon" />
                {numReviews === 0 ? 5 : avgOverallRating} •
                {" "}
                {numReviews}
                {numReviews === 1 ? ' Review' : ' Reviews'}
            </div>

            <div id="progress-container">
                <div className="progress-item">
                    <label for="cleanliness">Cleanliness</label>
                    <div id="progress-rating">
                        <progress id="cleanliness" value={avgCleanlinessRating} max="5"></progress>
                        <p>{avgCleanlinessRating}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label for="accuracy">Accuracy</label>
                    <div id="progress-rating">
                        <progress id="accuracy" value={avgAccuracyRating} max="5"></progress>
                        <p>{avgAccuracyRating}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label for="communication">Communication</label>
                    <div id="progress-rating">
                        <progress id="communication" value={avgCommunicationRating} max="5"></progress>
                        <p>{avgCommunicationRating}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label for="location">Location</label>
                    <div id="progress-rating">
                        <progress id="location" value={avgLocationRating} max="5"></progress>
                        <p>{avgLocationRating}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label for="checkIn">Check-in</label>
                    <div id="progress-rating">
                        <progress id="checkIn" value={avgCheckinRating} max="5"></progress>
                        <p>{avgCheckinRating}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label for="value-rating">Value</label>
                    <div id="progress-rating">
                        <progress id="value-rating" value={avgValueRating} max="5"></progress>
                        <p>{avgValueRating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewProgressBar;
