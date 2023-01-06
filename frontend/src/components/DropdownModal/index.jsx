import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Modal.css";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupModal";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const toggleModal = () => {
        setModal(!modal);
    }

    const loginClick = () => {
        setModal(!modal);
        return (
            <LoginFormModal/>
        )
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
                            {/* These next two lines are from before I changed it to a modal */}
                            {/* <li id="login" onClick={toggleModal}> <NavLink to="/login" id='login' >Log in</NavLink> </li> */}
                            {/* <li className="nonbold" onClick={toggleModal}> <NavLink to="/signup" id='signup' >Sign up</NavLink> </li> */}

                            {/* <li id="login" onClick={loginClick}> Log In </li> */}
                            <li id="login"> <LoginFormModal/> </li>
                            <li id="login"> <SignupFormModal/> </li>
                            <li id="demo-user" className="nonbold" onClick={demoLogin}>Demo Login</li>
                            <li className="nonbold"> AirbNZ your home</li>
                        </ul>
                    </div>
                </div>
            )}

        </>
    );
}
