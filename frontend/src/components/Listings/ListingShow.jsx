import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";

const ListingShow = () => {
    const dispath = useDispatch();
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));

    useEffect(() => {
        dispath(fetchListing(listingId));
    }, [listingId])

    return(
        <>
            <h2>{listing.title}</h2>
            <ul id="listing-info">
                <li>{listing.description}</li>
                <li>{listing.address}, {listing.city}, {listing.state}, {listing.zipCode}</li>
                <li>price: ${listing.price}</li>
                <li>beds: {listing.numBeds}</li>
                <li>baths: {listing.numBaths}</li>
            </ul>
            <Link to={`/`}>Back to Home Page</Link>
        </>
    )
}

export default ListingShow;
