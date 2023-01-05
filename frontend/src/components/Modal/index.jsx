import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const toggleModal = () => {
        setModal(!modal);
    }

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(login({credential:`demo@user.io`, password:`password`}))
        // .then(() => history.pushState(`/`))    (I don't think I need this line)
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
                            {/* <li id="login" onClick={toggleModal}> <NavLink to="/login" id='login' >Log in</NavLink> </li> */}
                            {/* <li id="login" onClick={toggleModal}> <NavLink to="/login" id='login' >Log in</NavLink> </li> */}
                            <li className="nonbold" onClick={toggleModal}> <NavLink to="/signup" id='signup' >Sign up</NavLink> </li>
                            <li id="demo-user" className="nonbold" onClick={demoLogin}>Demo Login</li>
                            <li className="nonbold"> AirbNZ your home</li>
                        </ul>
                    </div>
                </div>
            )}

        </>
    );
}
