import React from "react"; //do I need to still include this line?
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();

    return(
        <>
            <p>HELLO</p>
            <div>{review.title}</div>
            <div>{review.body}</div>
            {/* <div>{}</div> */}
        </>
    )
}

export default ReviewIndexItem;
