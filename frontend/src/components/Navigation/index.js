
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Modal from '../Modal';
import SearchModal from '../SearchModal'


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='login-links'>
            <Modal />
            {/* To add other elements here inline, just add them below */}
            {/* <Modal /> */}
        </div>
      </>
    );
  }

  // const logo = new Image();
  // logo.src = "../imgs/airbnblogo.png"




  return (
    <nav>
      <div className='navbar'>
        <NavLink exact to="/" className='logo'>
          <i className="fa-brands fa-airbnb icon fa-2x" />
          <p>AirbNZ</p>
        </NavLink>
        <SearchModal />
        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
