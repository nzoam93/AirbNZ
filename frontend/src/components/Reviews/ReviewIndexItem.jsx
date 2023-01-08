import React from "react"; //do I need to still include this line?
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import assetImg from "../Listings/houseimgs/airbnzphoto.jpg"



const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const profileImg = <img src={assetImg} alt="house"/>



    return(
        <div id="review-container">
            <div id="user-review-info">
                <div id="profile-img">{profileImg}</div>
                <div id="username-and-time">
                    <div id="review-username">{sessionUser.username}</div>
                    <div id="review-time">January 2023</div>
                </div>
            </div>
            {/* <div>{review.title}</div> */}
            <div id="review-body">{review.body}</div>
            {/* <div>{}</div> */}
        </div>
    )
}

export default ReviewIndexItem;