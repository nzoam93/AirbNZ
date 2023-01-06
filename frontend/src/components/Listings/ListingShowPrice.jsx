import { Calendar } from "react-calendar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing } from "../../store/listings";
import AirbnzCalendar from "../AirbnzCalendar";

const ListingShowPrice = () => {
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));
    const visitCost = Math.round(listing.price * 5);
    const discount = Math.round(listing.price * 0.1);
    const cleaningFee = Math.round(listing.price * 0.08);
    const serviceFee = Math.round(listing.price * 0.05);
    const totalPrice = visitCost + discount + cleaningFee + serviceFee;

    return(
        <div id="right-show">
        <div id="preliminary-right-info-show">
            <li className="bold price-show">${listing.price} <span id="price-span"> night</span></li>
            <div>
                <i className="fa-solid fa-star fa-0.5x bold" />  <span id="price-span">5.0 • 9 Reviews</span>
                {/* <p>9 reviews</p> */}
            </div>
        </div>
        <div id="checkin-info">
            <div id="checkin-checkout">
                <li>CHECK-IN</li>
                <AirbnzCalendar />
                <li>CHECKOUT</li>
            </div>
            <div id="guests">GUESTS</div>
        </div>
        <div id="reserve-button-container">
            <button id="reserve-button">Reserve</button>
        </div>
        <li id="charge-show">You won't be charged yet</li>
        <div id="price-info-show">
            <div className="price-info-item-show">
                <li>${listing.price} x 5 nights</li>
                <li>${visitCost}</li>
            </div>
            <div className="price-info-item-show">
                <li>Long stay discount</li>
                <li>-${discount}</li>
            </div>
            <div className="price-info-item-show">
                <li>Cleaning fee</li>
                <li>${cleaningFee}</li>
            </div>
            <div className="price-info-item-show">
                    <li>Service fee</li>
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

export default ListingShowPrice;
