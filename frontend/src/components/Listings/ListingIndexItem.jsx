import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { deleteListing } from "../../store/listings";
import { Link } from "react-router-dom";

const ListingIndexItem = ({listing}) => {
    const dispatch = useDispatch();

    return(
        <div id="listing-index-item">
            <div id="link">
                <Link to={`listings/${listing.id}`}>{listing.title}</Link>
            </div>
            <ul id="listing-info">
                <li>{listing.description}</li>
                <li>{listing.address}, {listing.city}, {listing.state}, {listing.zipCode}</li>
                <li>price: ${listing.price}</li>
                <li>beds: {listing.numBeds}</li>
                <li>baths: {listing.numBaths}</li>
            </ul>
            <button onClick={() => {dispatch(deleteListing(listing.id))}}>Delete</button>
            {/* <Link to={`listings/${listing.id}`}></Link> */}
        </div>
    )
}

export default ListingIndexItem;
