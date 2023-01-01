import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
// import ReactCalendar from "../ReactCalendar";

import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    // const showCalendar = () => {
    //     return <ReactCalendar />
    // }
    return (
        <>
            <button
            onClick={toggleModal}
            className="btn-modal icon"
            >
                <i className="fa-solid fa-magnifying-glass fa-2x" />
            </button>
            {/* shortcircuit conditional below that returns if true */}
            {modal && (
                <div className="search-modal">
                    <div className="overlay" onClick={toggleModal}></div> {/* overlay is the rest of the document (of the viewport) */}
                    <div className="search-modal-content">
                        <form className="search-form">
                            <label> Where
                                <input className="search-button-info" type="text" placeholder="Search destinations"/>
                            </label>
                            <label> Check in
                                <input className="search-button-info" type="date" placeholder="Add dates"/>
                            </label>
                            <label> Check out
                                <input className="search-button-info" type="date" placeholder="Add dates"/>
                            </label>
                            <label> Who
                                <input className="search-button-info" type="text" placeholder="Add guests"/>
                            </label>
                            <button
                                onClick={toggleModal}
                                className="btn-modal search-button-info icon"
                                >
                                    <i className="fa-solid fa-magnifying-glass fa-2x" />
                            </button>
                        </form>
                        {/* <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button> */}
                    </div>
                </div>
            )}

        </>
    );
}
