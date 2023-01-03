import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from "../../store/listings";
import ListingIndexItem from "./ListingIndexItem";
import './Listing.css';

const ListingIndex = () => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings);

    useEffect(() => {
        dispatch(fetchListings());
    }, [])

    return(
        <>
            <div id="all-listings">
                {/* <div>Hello from listings</div> */}
                {listings.map((listing) => <ListingIndexItem listing={listing} key={listing.id}/> )}
            </div>
        </>
    )
}

export default ListingIndex;
