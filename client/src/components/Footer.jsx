import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo31.png';

const Footer = () => {
  const [showWarning, setShowWarning] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowWarning(true);
  }
  const continueToLink = () => {
    window.location.href = 'https://cointelegraph.com/';
  }

  return (
    <div className="max-w-full mx-3rem">
      <footer className="p-5 shadow md:px-6 md:py-8 gradient-bg-footer">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <Link to={'/'}>
            <img src={logo} alt="logo" className="w-12 cursor-pointer" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <Link to={'/about'} className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</Link>
            </li>
            <li>
              <Link to={'/privacypolicy'} className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</Link>
            </li>
            <li>
              {showWarning ? (
                <div>
                  <p className="bg-black p-2 rounded-lg shadow-md text-sm">WARNING:<br/>You are about to leave SendETH  <br/>  
                  to an external website, are you <br/>sure you want to proceed?</p>
                  <button onClick={continueToLink} className="text-sm text-white-700 mr-1 hover:bg-gradient-to-r from-red-500 to-orange-500  px-2 mx-1 rounded-full">Yes</button>
                  <button onClick={() => setShowWarning(false)} className="text-sm text-white-600 hover:bg-gradient-to-r from-red-500 to-orange-500  px-2 mx-1 rounded-full">No</button>
                </div>
              ) : (
                  <a href="#" onClick={handleClick} className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">News</a>
                )}
            </li>
            <li>
              <Link to={'/contact'} className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="/" target="_blank" className="hover:underline">SendETH™</a>. All Rights Reserved.
          </span>
            </footer>

        </div>
    );
}

export default Footer;
