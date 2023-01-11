import { useMemo } from "react";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import "./GoogleMapsAPI.css"

export default function GoogleMapsAPI() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
}

function Map() {
    const center = useMemo(() => ({lat: 37.8, lng: -122.3}), [])
    return(
        <GoogleMap
            zoom = {10}
            center ={center}
            mapContainerClassName="map-container"
        >
        <MarkerF position={{lat: 44, lng: -80}} />
        </GoogleMap>
    )
}
