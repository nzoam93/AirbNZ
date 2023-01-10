import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./ReservationIndexItem.css"



const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch();

    return(
        <>
            <div id="reservation-container">
                <p>{reservation.checkInDate}</p>
                <p>{reservation.numGuests}</p>
            </div>
        </>
    )
}

export default ReservationIndexItem;
