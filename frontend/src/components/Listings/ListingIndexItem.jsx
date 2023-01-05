import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { deleteListing } from "../../store/listings";
import { Link } from "react-router-dom";
import assetImg from "./houseimgs/airbnzphoto.jpg"



const ListingIndexItem = ({listing}) => {
    const dispatch = useDispatch();
    const houseImg = <img src={assetImg} alt="house"/>


    return(
        <>
            <Link to={`listings/${listing.id}`} id="listing-index-item">
                {/* <div id="house-img"><img src={listing.photoUrls[0]} alt="house" /></div> */}

                <div id="house-img">{houseImg}</div>


                {/* <div id="link">
                    <Link to={`listings/${listing.id}`}>{listing.title}</Link>
                </div> */}
                <ul id="listing-info">
                    <li className="bold">{listing.city}, {listing.state}</li>
                    <li>{listing.description}</li>
                    <li className="bold">${listing.price} <span id="price-span"> night</span></li>
                </ul>
                {/* <button onClick={() => {dispatch(deleteListing(listing.id))}}>Delete</button> */}
                {/* <Link to={`listings/${listing.id}`}></Link> */}
            </Link>
        </>
    )
}

export default ListingIndexItem;
