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
    const [numGuests, setNumGuests] = useState(0);


    const listing = useSelector(getListing(listingId));
    const visitCost = Math.round(listing.price * 5);
    const discount = Math.round(listing.price * 0.1);
    const cleaningFee = Math.round(listing.price * 0.08);
    const serviceFee = Math.round(listing.price * 0.05);
    const totalPrice = visitCost + discount + cleaningFee + serviceFee;


    const handleSubmit = () => {
        console.log(listingId);
        console.log(checkinDate);
        console.log(checkoutDate);
        console.log(new Date(checkinDate._d).getDate())
        console.log(new Date(checkinDate._d).getMonth())
        console.log(new Date(checkinDate._d).getFullYear())
    }

    // For plus-minus button from https://codepen.io/mtbroomell/pen/yNwwdv
    const increaseValue = () => {
        setNumGuests(numGuests + 1);
        console.log(numGuests)
    }

    const decreaseValue = () => {
        setNumGuests(numGuests - 1);
    }

    // function increaseValue() {
    //     var value = parseInt(document.getElementById('number').value, 10);
    //     value = isNaN(value) ? 0 : value;
    //     value++;
    //     document.getElementById('number').value = value;
    //   }

    // function decreaseValue() {
    //     var value = parseInt(document.getElementById('number').value, 10);
    //     value = isNaN(value) ? 0 : value;
    //     value < 1 ? value = 1 : '';
    //     value--;
    //     document.getElementById('number').value = value;
    // }



    return(
        <div id="right-show">
        <div id="preliminary-right-info-show">
            <li className="bold price-show">${listing.price} <span id="price-span"> night</span></li>
            <div>
                <ReviewInfo />
            </div>
        </div>
        <div id="checkin-info">
            <div id="checkin-checkout">
                <div id="check-in-labels">
                    <p id="check-in-on-form">CHECK-IN</p>
                    <p>CHECK-OUT</p>
                </div>
                <div className="center-content">
                    <AirbnzCalendar
                        checkinDate = {checkinDate}
                        checkoutDate = {checkoutDate}
                        setCheckinDate = {setCheckinDate}
                        setCheckoutDate = {setCheckoutDate}
                    />
                </div>
                <div id="guests-on-form" className="center-content">
                    {/* number of guests plus-minus
                    <div className="value-button" id="decrease" onClick={decreaseValue}>-</div>
                    <input
                            type='text'
                            value={undefined}
                            onChange={e => this.setState({ message: e.target.value })}
                            placeholder='Enter Your Message'
                    />
                    <div className="value-button" id="increase" onClick={increaseValue}>+</div> */}
                    <input type="text" placeholder="How Many Guests" />
                </div>
            </div>
        </div>
        <div id="reserve-button-container">
            <button id="reserve-button" onClick={handleSubmit}>Reserve</button>
        </div>
        <li id="charge-show">You won't be charged yet</li>
        <div id="price-info-show">
            <div className="price-info-item-show">
                <li className="underline">${listing.price} x 5 nights</li>
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
