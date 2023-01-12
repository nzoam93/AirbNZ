import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from "../../store/listings";
import ListingIndexItem from "./ListingIndexItem";
import './Listing.css';
import AllPins from "../GoogleMapsAPI/AllPins";


const ListingIndex = () => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    const [showGoogleMap, setShowGoogleMap] = useState(false);

    useEffect(() => {
        dispatch(fetchListings());
    }, [])

    const toggleMap = () => {
        setShowGoogleMap(!showGoogleMap)
        if(showGoogleMap){
            document.getElementById("show-map-words").innerHTML = "Show map";
        } else{
            document.getElementById("show-map-words").innerHTML= "Show items"
        }
    }


    return(
        <>
            {/* show the map if ShowGoogle Map is true  */}
            {showGoogleMap && (
                <div id="all-pins-holder">
                    <AllPins />
                </div>
            )}
            {/* show the listing if ShowGoogleMap is false  */}
            {!showGoogleMap && (
                <div id="all-listings">
                    {listings.map((listing) => <ListingIndexItem listing={listing} key={listing.id}/> )}
                </div>
            )}
            <div id="all-listings-map-container">
                <div onClick={toggleMap} id="all-listings-map" className="airbnz-button">
                    <p id="show-map-words">Show map</p>
                    <i className="fa-solid fa-map" />
                </div>
            </div>
        </>
    )
}

export default ListingIndex;
