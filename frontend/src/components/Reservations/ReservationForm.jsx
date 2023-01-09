import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing } from "../../store/listings";
import AirbnzCalendar from "../AirbnzCalendar"
import ReviewInfo from "../Reviews/ReviewInfo";
import "./Reservation.css"

const ReservationForm = () => {
    const {listingId} = useParams();
    const [checkinDate, setCheckinDate] = useState();
    const [checkoutDate, setCheckoutDate] = useState();
    // const [focusedInput, setFocusedInput] = useState();

    let checkInTime;
    let checkoutTime;
    let daysElapsed = 0;
    if(checkinDate){
        checkInTime = new Date(checkinDate._d).getTime();
    }
    if(checkoutDate){
        checkoutTime = new Date(checkoutDate._d).getTime();
    }
    if(checkinDate && checkoutDate){
        daysElapsed = Math.round((checkoutTime - checkInTime) / 1000 / 60 / 60 / 24)
    }


    const listing = useSelector(getListing(listingId));
    const visitCost = Math.round(listing.price * daysElapsed);
    let discount;
    if(daysElapsed && daysElapsed > 5){
        discount = Math.round(listing.price * 0.1 * daysElapsed);
    }
    else{
        discount = 0
    }
    const cleaningFee = Math.round(listing.price * 0.08);
    const serviceFee = Math.round(listing.price * 0.05);
    const totalPrice = visitCost - discount + cleaningFee + serviceFee;


    const handleSubmit = () => {
        console.log(listingId);
        console.log(checkinDate);
        console.log(checkoutDate);
        console.log(new Date(checkinDate._d).getDate())
        console.log(new Date(checkinDate._d).getMonth())
        console.log(new Date(checkinDate._d).getFullYear())
        checkInTime = new Date(checkinDate._d).getTime();
        console.log(checkInTime);
        checkoutTime = new Date(checkoutDate._d).getTime();
        console.log(checkoutTime);
        daysElapsed = Math.round((checkoutTime - checkInTime) / 1000 / 60 / 60 / 24)
        console.log(daysElapsed)
    }


    return(
        <div id="right-show">
        <div id="preliminary-right-info-show">
            <li className="bold price-show">${listing.price} <span id="price-span"> night</span></li>
            <div>
                <ReviewInfo />
            </div>
        </div>
        <div id="checkin-info">
            <div id="checkin-container">
                <div id="check-in-labels">
                    <p id="check-in-label">CHECK-IN</p>
                    <p id="check-out-label">CHECK-OUT</p>
                </div>
                <div id="reservation-calendar">
                    <AirbnzCalendar
                        checkinDate = {checkinDate}
                        checkoutDate = {checkoutDate}
                        setCheckinDate = {setCheckinDate}
                        setCheckoutDate = {setCheckoutDate}
                    />
                </div>
            </div>
            <div id="guests-container">
                <div id="guests-on-form">
                    <input type="number" placeholder="How Many Guests" />
                </div>
            </div>
        </div>
        <div id="reserve-button-container">
            <button id="reserve-button" onClick={handleSubmit}>Reserve</button>
        </div>
        <li id="charge-show">You won't be charged yet</li>
        <div id="price-info-show">
            <div className="price-info-item-show">
                <li className="underline">${listing.price} x {daysElapsed} nights</li>
                <li>${visitCost}</li>
            </div>
            <div className="price-info-item-show">
                <li className="underline">Long stay discount</li>
                <li>-${discount}</li>
            </div>
            <div className="price-info-item-show">
                <li className="underline">Cleaning fee</li>
                <li>${cleaningFee}</li>
            </div>
            <div className="price-info-item-show">
                    <li className="underline">Service fee</li>
                    <li>${serviceFee}</li>
                </div>
                <div className="price-info-item-show bold" id="total-show">
                    <li>Total before taxes</li>
                    <li>${totalPrice}</li>
                </div>
            </div>
        </div>
    )

}

export default ReservationForm;
