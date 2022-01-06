import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthService from '../../services/auth';
import * as actions from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const username = useSelector(state => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    console.log("log out clicked");
    const authService = new AuthService();
    const loggedOut = authService.logout();
    if (loggedOut) {
      dispatch(actions.loggedOut());
      navigate("/login");
    }
  }
  const currentLocation = window.location.pathname;
  
  return (
    <div id="header" className="bg-white fixed w-full z-10 top-0 shadow">

      <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

        <div className="w-1/2 pl-2 md:pl-0">
          <Link to="/" className="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#">
            <i className="fas fa-sun text-pink-600 pr-3"></i> Jey Inventory
          </Link>
        </div>
        <div className="w-1/2 pr-0">
          <div className="flex relative float-right">

            <div className="relative text-sm">
              <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center focus:outline-none mr-3">
                <span className="hidden md:inline-block">Hi, {username} </span>
                <svg className="pl-2 h-2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129">
                  <g>
                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                  </g>
                </svg>
              </button>
              <div onClick={() => logout()} id="userMenu" className={`bg-white hover:bg-gray-400 rounded shadow-md absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 ${!showUserMenu && "invisible"}`}>
                <ul className="list-reset">
                  <li><button className="px-4 py-2 block text-gray-900 no-underline hover:no-underline">Logout</button></li>
                </ul>
              </div>
            </div>


            <div className="block lg:hidden pr-4">
              <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>

        </div>


        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white z-20" id="nav-content">
          <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
            <li className="mr-6 my-2 md:my-0">
              <Link to="/dashboard" className={`flex py-1 md:py-3 pl-1 align-middle  no-underline hover:text-gray-900 ${currentLocation === "/dashboard" ? 'border-orange-600 text-pink-600' : "border-white"} border-b-2 hover:border-orange-600`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg><span className="pb-1 md:pb-0 text-sm">Dashboard</span>
              </Link>
            </li>
            <li className="mr-6 my-2 md:my-0">
              <Link to="/items" className={`flex py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 ${currentLocation === "/items" ? 'border-orange-600 text-pink-600' : "border-white"} border-b-2 hover:border-pink-500`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg><span className="pb-1 md:pb-0 text-sm">Items</span>
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}
