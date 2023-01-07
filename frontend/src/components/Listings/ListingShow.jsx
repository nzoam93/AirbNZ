import { useEffect } from "react";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import assetImg from "./houseimgs/airbnzphoto.jpg"
import ListingShowPrice from "../Reservations/ReservationForm";
import "./ListingShow.css"


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
                {/* <div className="item1 grid-img"><img src={listing.photoUrls[0]} alt="house" /></div>
                <div className="item2 grid-img"><img src={listing.photoUrls[1]} alt="room1" /></div>
                <div className="item3 grid-img"><img src={listing.photoUrls[2]} alt="room2" /></div>
                <div className="item4 grid-img"><img src={listing.photoUrls[3]} alt="room3" /></div>
                <div className="item5 grid-img"><img src={listing.photoUrls[4]} alt="room4" /></div> */}
            </div>
            <div id="more-info-show">
                <div id="left-show">
                    <div id="preliminary-info-show">
                        <div>
                            <p id="owner-info-show">Entire home hosted by {listing.ownerName}</p>
                            <p>{listing.numGuests} guests • {listing.numBeds} bedrooms • {listing.numBaths} bathrooms</p>
                        </div>
                        {/* <div id="profile-picture-show"><img src={listing.photoUrls[0]} alt="photo1" /></div> */}
                    </div>
                    <div id="specialties-show">
                        <i className="fa-solid fa-wifi fa-2x" /> Fast Wifi <br />
                        <i className="fa-solid fa-key fa-2x spin" /> Great check-in experience <br />
                        <i className="fa-solid fa-star fa-2x" /> Experienced host <br />
                    </div>
                    <div id="description-show">
                        {listing.description}
                    </div>
                    <div id="offerings-show">
                        <h4 className="title-show">What this place offers</h4>
                        <div id="all-offerings-show">
                            <div id="left-offerings-show">
                                <i className="fa-solid fa-utensils fa-2x" /> Kitchen <br />
                                <i className="fa-solid fa-mountain fa-2x" /> Mountain Views <br />
                                <i className="fa-solid fa-person-swimming fa-2x" /> Private Pool <br />
                            </div>
                            <div id="right-offerings-show">
                                <i className="fa-solid fa-dog fa-2x" /> Pet Friendly <br />
                                <i className="fa-solid fa-wind fa-2x" /> Air Conditioning <br />
                                <i className="fa-solid fa-car fa-2x" /> Free parking <br />
                            </div>
                        </div>
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

                <ListingShowPrice />

            </div>
        </div>
    )
}

export default ListingShow;
