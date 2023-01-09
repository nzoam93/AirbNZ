import React, { useState } from "react"; //do I need to still include this line?
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import assetImg from "../Listings/houseimgs/airbnzphoto.jpg"
import { deleteReview, getReview, fetchReview, createReview, updateReview } from '../../store/reviews.js';
import ReviewFormEdit from "./ReviewFormEdit";



const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    let activeUser;

    const[showReviewFormEdit, setShowReviewFormEdit] = useState(false);
    const toggleReviewForm = () => {
        setShowReviewFormEdit(!showReviewFormEdit);
    }

    const profileImg = <img src={assetImg} alt="house"/>

    const handleDelete = () => {
        dispatch(deleteReview(review.id))
    }

    return(
        <>
            <div id="review-container">
                <div id="user-review-info">
                    <div id="profile-img">{profileImg}</div>
                    <div id="username-and-time">
                        <div id="review-username">{review.username}</div>
                        <div id="review-time">{review.createDate}</div>
                    </div>
                </div>
                <div id="review-body">{review.body}</div>

                {/* <div id="review-stars">{review.starRating} stars</div> */}

                {/* only show if the current user is the one that made the review */}
                {sessionUser ? activeUser = sessionUser.username : null}
                {activeUser === review.username ?
                <div id="review-button-container">
                    <div className="review-button" id="edit-review-button" onClick={toggleReviewForm}>Edit Review</div>
                    <div className="review-button" onClick={handleDelete}>Delete Review</div>
                </div> : ""
                }
            </div>
            {showReviewFormEdit ? <ReviewFormEdit review = {review} setShowReviewFormEdit = {setShowReviewFormEdit}/> : ""}
        </>
    )
}

export default ReviewIndexItem;
