import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import assetImg from "../Listings/houseimgs/airbnzphoto.jpg"
import "./ReservationIndexItem.css"


const ReservationIndexItem = ({reservation}) => {
    const houseImg = <img src={assetImg} alt="house"/>

    return(
        <>
            <Link to={`/listings/${reservation.listingId}`} id="reservation-index-item">
                {/* In order to use the below line, I need to get the listing.photoUrls in the reservation state
                OR ALTERNATIVELY, just do a listing = useSelector(state.session.listing) */}
                {/* <div id="house-img"><img src={listing.photoUrls[0]} alt="house" /></div> */}
                <div id="reservation-house-img">{houseImg}</div>
                <div id="reservation-container">
                    <p>{reservation.listingTitle}</p>
                    <div id="reservation-dates">
                        {reservation.startDate} to {reservation.endDate}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ReservationIndexItem;
