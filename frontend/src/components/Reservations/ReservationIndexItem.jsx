import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import assetImg from "./houseimgs/airbnzphoto.jpg"



const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch();
    const houseImg = <img src={assetImg} alt="house"/>

    return(
        <>
        </>
    )
}

export default ReservationIndexItem;
