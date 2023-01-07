
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import assetImg from "../Listings/houseimgs/airbnzphoto.jpg"



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const profileImg = <img src={assetImg} alt="house"/>


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    //cleanup for the useEffect
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className='login-links'>
      {/* !showmenu in order to make it not show up when the menu is open */}
      {/* {!showMenu && <button onClick={openMenu} className='icon'>
        <i className="fa-solid fa-user-circle fa-2x" />
      </button>} */}
      {!showMenu && (
        <>
          <div id="profile-img">{profileImg}</div>
          <ul id="profile-dropdown">
            <li>{user.username}</li>
            <button id="logout-button" onClick={logout}>Log Out</button>
          </ul>
        </>

      )}
    </div>
  );
}

export default ProfileButton;
