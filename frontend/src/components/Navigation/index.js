
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Modal from '../Modal';

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
        <div className='loginLinks'>
            <Modal />
        </div>
      </>
    );
  }

  // const logo = new Image();
  // logo.src = "../../../imgs/airbnblogo.png"




  return (
    <nav>
      <div className='links'>
        <NavLink exact to="/">Home</NavLink>
        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
