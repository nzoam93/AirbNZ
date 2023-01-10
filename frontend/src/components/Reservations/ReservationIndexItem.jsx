import React, { useState } from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReservation } from "../../store/reservations";
import assetImg from "../Listings/houseimgs/airbnzphoto.jpg"
import ReservationFormEdit from "./ReservationFormEdit";
import "./ReservationIndexItem.css"

const ReservationIndexItem = ({reservation}) => {
    const houseImg = <img src={assetImg} alt="house"/>

    const dispatch = useDispatch();

    const[showReservationFormEdit, setShowReservationFormEdit] = useState(false);
    const toggleReservationForm = () => {
        setShowReservationFormEdit(!showReservationFormEdit);
    }

    const handleDelete = () => {
        dispatch(deleteReservation(reservation.id));
    }

    return(
        <div id="reservation-index-item-container">
            <div id="reservation-index-item">
                <Link to={`/listings/${reservation.listingId}`}>
                    {/* In order to use the below line, I need to get the listing.photoUrls in the reservation state
                    OR ALTERNATIVELY, just do a listing = useSelector(state.session.listing) */}
                    {/* <div id="house-img"><img src={listing.photoUrls[0]} alt="house" /></div> */}
                    <div id="reservation-house-img">{houseImg}</div>
                </Link>
                <div id="reservation-container">
                    <p id="reservation-title">{reservation.listingTitle}</p>
                    <div id="reservation-info">
                        {reservation.startDate} to {reservation.endDate} • {reservation.numGuests} guests
                    </div>
                    <div id="show-page-buttons">
                        <p onClick={toggleReservationForm} className="show-page-button">Update </p>
                        <p onClick={handleDelete} className="show-page-button"> Cancel</p>
                    </div>
                </div>
                {showReservationFormEdit ?
                    <div id="reservation-form-modal">
                        <ReservationFormEdit reservation = {reservation} setShowReservationFormEdit = {setShowReservationFormEdit}/>
                    </div>
                : ""}
            </div>
        </div>
    )
}

export default ReservationIndexItem;
