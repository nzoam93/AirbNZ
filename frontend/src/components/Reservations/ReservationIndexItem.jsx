import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./ReservationIndexItem.css"



const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch();

    return(
        <>
            <Link to={`/listings/${reservation.listingId}`}>
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
