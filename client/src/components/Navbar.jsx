import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../../images/logo31.png";



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-3 gradient-bg-welcome ">
      <div className="md:flex-[0.1] flex-initial justify-center items-center">
        <Link to={'/'}>
        <img src={logo} alt="logo" className="w-20 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial md:block  uppercase">
        {["Market", "About", "Service"].map((item, index) => (
          <li key={item + index} className= {'mx-4 cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500 py-1 px-6 mx-4'} >
          <Link to= {`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
        <Link to={'/contact'} className=" border py-1 px-5 mx-4 cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500">
          Contact Us
        </Link>
        
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
             <Link to={'/'}>
        <img src={logo} alt="logo" className="w-20 cursor-pointer" />
        </Link>
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {[ "Market", "About", "Service", "Contact"].map(
              (item, index) => <li key={item + index} className={`my-2 text-lg`} >
              <Link to= {`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            )}
          </ul>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;