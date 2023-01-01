import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    // const loginClick = () => {
    //     toggleModal();
    // }
    return (
        <>
            <button
            onClick={toggleModal}
            className="btn-modal icon"
            >
                <i className="fa-solid fa-user-circle fa-2x" />
            </button>
            {/* shortcircuit conditional below that returns if true */}
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div> {/* overlay is the rest of the document (of the viewport) */}
                    <div className="modal-content">
                        <ul>
                            <li id="login" onClick={toggleModal}> <NavLink to="/login" id='login' >Log in</NavLink> </li>
                            <li id="nonbold" onClick={toggleModal}> <NavLink to="/signup" id='signup' >Sign up</NavLink> </li>
                            {/* <li id="line"> 0</li> */}
                            <li id="nonbold"> AirbNZ your home</li>
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
