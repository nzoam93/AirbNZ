import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { deleteListing } from "../../store/listings";
import { Link } from "react-router-dom";

const ListingIndexItem = ({listing}) => {
    const dispatch = useDispatch();

    return(
        <li>
            <Link to={`listings/${listing.id}`}>{listing.title}</Link>
            {/* <Link to={`listings/${listing.id}`}></Link> */}
            <button onClick={() => {dispatch(deleteListing(listing.id))}}>Delete</button>
        </li>
    )
}

export default ListingIndexItem;
