import React, {useState} from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginFormModal/LoginForm";
import SignupForm from "../SignupModal/SignupForm";
import { Modal } from "../../context/Modal";
import "./Modal.css";

export default function DropdownModal() {
    const [showDropdownModal, setShowDropdownModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const dispatch = useDispatch();

    const toggleDropdownModal = () => {
        setShowDropdownModal(!showDropdownModal);
    }

    const loginClick = () => {
        setShowDropdownModal(!showDropdownModal);
        setShowLoginModal(!showLoginModal);
    }

    const signupClick = () => {
        setShowDropdownModal(!showDropdownModal);
        setShowSignupModal(!showSignupModal);
    }

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(login({credential:`demo@user.io`, password:`password`}))
    }

    return (
        <>
            <button onClick={toggleDropdownModal} className="btn-modal icon">
                <i className="fa-solid fa-user-circle fa-2x" />
            </button>
            {/* shortcircuit conditional below that returns if true */}
            {showDropdownModal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleDropdownModal}></div> {/* overlay is the rest of the document (of the viewport) */}
                    <div className="modal-content">
                        <ul>
                            <li id="login" onClick={loginClick}> Log In </li>
                            <li id="login" className="nonbold" onClick={signupClick}> Sign Up </li>
                            <li id="demo-user" className="nonbold" onClick={demoLogin}>Demo Login</li>
                            <li className="nonbold"> AirbNZ your home</li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Showing login form modal if its state is true */}
            {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                    <LoginForm />
                </Modal>
            )}

            {/* Showing signup form modal if its state is true */}
            {showSignupModal && (
                <Modal onClose={() => setShowSignupModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}
