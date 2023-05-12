import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";
import open from "../assests/menu.png";
import close from "../assests/close.png";
import { Link } from "react-scroll";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandle = (e) => {
    if (e == false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className={`flex items-center justify-between mt-6 `}>
      <div className="text-white text-2xl">
        <h1 className="animate-pulse">Sandeep Behl </h1>
      </div>
      <div className="w-[500px]  max-md:hidden ">
        <ul className="flex justify-between text-white text-2xl ">
          <li className="cursor-pointer hover:translate-y-[-2px] hover:text-sky-400 drop-shadow-md transition duration-150 ease-in-out ">
          <Link activeClass="active" smooth spy to="home" >
              Home
            </Link>
          </li>

          <li className="cursor-pointer hover:translate-y-[-2px]  drop-shadow-md transition duration-150 ease-in-out " >
            <Link activeClass="active" className=" hover:text-sky-400" smooth spy to="about">
              About
            </Link>
          </li>

          <li className="cursor-pointer hover:translate-y-[-2px] drop-shadow-md transition duration-150 ease-in-out ">
            <Link activeClass="active" className=" hover:text-sky-400" smooth spy to="projects">
              Projects
            </Link>
          </li>

          <li className="cursor-pointer  hover:translate-y-[-2px] transition duration-150 ease-in-out ">
          <Link activeClass="active" className="  hover:text-sky-400" smooth spy to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden bg-[#D9D9D9] flex flex-1  justify-end items-center">
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute z-3 w-full right-0 h-screen top-0 bg-white`}
        >
          <ul className=" flex flex-col text-4xl items-center justify-center w-full h-screen ">
            {navLinks.map((nav) => {
              return (
                <li className="  mb-8 text-black">
                  <a href="">{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={`${toggle ? close : open}`}
          className="text-white cursor-pointer absolute  z-0 h-[50px] w-[50px] object-contain"
          onClick={() => {
            clickHandle(toggle);
          }}
          alt="menu"
        />
      </div>
    </div>
  );
};

export default NavBar;
