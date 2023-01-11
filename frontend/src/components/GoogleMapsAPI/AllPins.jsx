import { useMemo } from "react";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import "./GoogleMapsAPI.css"
import { useSelector } from "react-redux";
import { getListings } from "../../store/listings";

export default function AllPins() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
}

function Map() {
    const listings = useSelector(getListings);

    const center = useMemo(() => ({lat: 37.8, lng: -122}), [])
    // const center = useMemo(() => ({lat: listing.latitude, lng: listing.longitude}), [])

    if(!listings){
        return null;
    }

    return(
        <>
        <GoogleMap
            zoom = {9}
            center ={center}
            mapContainerClassName="map-container"
        >
        {listings.map((listing) =>
            <MarkerF position={{lat: listing.latitude, lng: listing.longitude}} key={listing.id} />
        )}
        </GoogleMap>
        </>
    )
}
