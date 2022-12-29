import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
            <button
            onClick={toggleModal}
            className="btn-modal"
            >
                <i className="fa-solid fa-user-circle" />
            </button>
            {/* shortcircuit conditional below that returns if true */}
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div> {/* overlay is the rest of the document (of the viewport) */}
                    <div className="modal-content">
                        <ul>
                            <li onClick={toggleModal}> <NavLink to="/signup" id='signup' >Sign Up</NavLink> </li>
                            <li onClick={toggleModal}> <NavLink to="/login" id='login' >Log In</NavLink> </li>
                            <li> AirbNZ Your Home</li>
                        </ul>
                        {/* <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button> */}
                    </div>
                </div>
            )}

        </>
    );
}
