import { useEffect } from "react";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import assetImg from "./houseimgs/airbnzphoto.jpg"


const ListingShow = () => {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));
    const houseImg = <img src={assetImg} alt="house"/>



    useEffect(() => {
        dispatch(fetchListing(listingId));
    }, [listingId, dispatch])


    //wait for listing to be defined before doing the return. Basically, break early so you don't try to return listing.something without it being in state
    if(!listing) {
        return null;
    }


    return(
        <div id="show-page">
            <h5 className="bold" id="listing-title">{listing.title}</h5>
            <div className="bold" id="second-line-on-show">
                <li>
                <i className="fa-solid fa-star fa-0.5x bold" />  <span id="price-span">5.0 • 9 Reviews • </span>
                {listing.city}, {listing.state}, United States

                </li>
                <li> Share Save</li>
            </div>
            <div id="photos-container">
                <div className="item1 grid-img">{houseImg}</div>
                <div className="item2 grid-img">{houseImg}</div>
                <div className="item3 grid-img">{houseImg}</div>
                <div className="item4 grid-img">{houseImg}</div>
                <div className="item5 grid-img">{houseImg}</div>
            </div>
            <div id="more-info-show">
                <div id="left-show">
                    <div id="preliminary-info-show">
                        <div>
                            <p id="owner-info-show">Entire home hosted by {listing.ownerName}</p>
                            <p>{listing.numGuests} guests • {listing.numBeds} bedrooms • {listing.numBaths} bathrooms</p>
                        </div>
                        <div id="profile-picture-show">{houseImg}</div>
                    </div>
                    <div id="specialties-show">
                        <i className="fa-solid fa-wifi fa-2x" /> Fast Wifi <br />
                        <i className="fa-solid fa-key fa-2x" /> Great check-in experience <br />
                        <i className="fa-solid fa-star fa-2x" /> Experienced host <br />
                    </div>
                    <div id="description-show">
                        {listing.description}
                    </div>
                    <div id="offerings-show">
                        <h4 className="title-show">What this place offers</h4>
                        <i className="fa-solid fa-utensils fa-2x" /> Kitchen <br />
                        <i className="fa-solid fa-mountain fa-2x" /> Mountain Views <br />
                        <i className="fa-solid fa-person-swimming fa-2x" /> Private Pool <br />
                    </div>
                    <div id="calendar-show">
                        <Calendar />
                    </div>
                    <div id="reviews-show">
                        <h4 className="title-show">Reviews</h4>
                        <p>I loved my stay</p>
                        <p>I also loved my stay here</p>
                    </div>
                </div>

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
                            <li>CHECKOUT</li>
                        </div>
                        <div id="guests">GUESTS</div>
                    </div>
                    <button id="reserve-button">Reserve</button>
                    <li id="charge-show">You won't be charged yet</li>
                    <div id="price-info-show">
                        <div className="price-info-item-show">
                            <li>$458 x 5 nights</li>
                            <li>$2,290</li>
                        </div>
                        <div className="price-info-item-show">
                            <li>Long stay discount</li>
                            <li>-$229</li>
                        </div>
                        <div className="price-info-item-show">
                            <li>Cleaning fee</li>
                            <li>$350</li>
                        </div>
                        <div className="price-info-item-show">
                            <li>Service fee</li>
                            <li>$240</li>
                        </div>
                        <div className="price-info-item-show bold" id="total-show">
                            <li>Total before taxes</li>
                            <li>$2,751</li>
                        </div>
                    </div>
                </div>

            </div>
            <ul id="listing-info">
                <li>{listing.description}</li>
                <li>{listing.address}, {listing.city}, {listing.state}, {listing.zipCode}</li>
                <li>price: ${listing.price}</li>
                <li>beds: {listing.numBeds}</li>
                <li>baths: {listing.numBaths}</li>
            </ul>
            <Link to={`/`}>Back to Home Page</Link>
        </div>
    )
}

export default ListingShow;
