import { useEffect } from "react";
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

    return(
        <div id="show-page">
            <h5 id="listing-title">{listing.title}</h5>
            <div id="second-line-on-show">
                <li>{listing.city}, {listing.state}, United States</li>
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
                    <div id="preliminary-show-info">
                        <div>
                            <p id="owner-info-show">Entire home hosted by ownerid:{listing.ownerId}</p>
                            <p>{listing.numGuests} guests • {listing.numBeds} bedrooms • {listing.numBaths} bathrooms</p>
                        </div>
                        <div id="profile-picture-show">{houseImg}</div>
                    </div>
                    <div id="specialities">
                       <i className="fa-solid fa-wifi fa-2x" /> Fast Wifi <br />
                        <i className="fa-solid fa-key fa-2x" /> Great check-in experience <br />
                        <i className="fa-solid fa-star fa-2x" /> Experienced host <br />


                    </div>
                </div>

                <div id="right-show">

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
