import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-t1.png";

const Navbar = ({ show, setShow }) => {
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[10%]">
      <div className=" bg-white lg:py-[16px] py-[10px] flex justify-between items-center ">
        <div>
          <NavLink to="/">
            <div className="w-[100px] md:w-[120px]">
              <img src={logo} />
            </div>
          </NavLink>
        </div>
        <div className="xl:flex hidden">
          <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] px-[16px]">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "#2E3192" : "black" };
              }}
            >
              Home
            </NavLink>
          </h4>
          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              <NavLink
                to="/news-and-articles"
                style={({ isActive }) => {
                  return { color: isActive ? "#2E3192" : "black" };
                }}
              >
                News and Articles
              </NavLink>
            </h4>
          </div>
          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              <NavLink
                to="/policy-tracker"
                style={({ isActive }) => {
                  return { color: isActive ? "#2E3192" : "black" };
                }}
              >
                Policy Tracker
              </NavLink>
            </h4>
          </div>
          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              <NavLink
                to="/about-us"
                style={({ isActive }) => {
                  return { color: isActive ? "#2E3192" : "black" };
                }}
              >
                About Us
              </NavLink>
            </h4>
          </div>

          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              <NavLink
                to="/projects"
                style={({ isActive }) => {
                  return { color: isActive ? "#2E3192" : "black" };
                }}
              >
                Projects
              </NavLink>
            </h4>
          </div>

          <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] px-[16px]">
            <NavLink
              to="/contact-us"
              style={({ isActive }) => {
                return { color: isActive ? "#2E3192" : "black" };
              }}
            >
              Contact Us
            </NavLink>
          </h4>
        </div>

        <div className="xl:hidden hover:cursor-pointer">
          <RxHamburgerMenu
            className="text-[25px]"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>

      <div
        className={`top-0 left-0 z-40 absolute bg-white w-full h-screen px-[3%] lg:px-[5%] xl:px-[10%] xl:hidden ${
          show ? "translate-y-0" : "-translate-y-[1300px]"
        } ease-in-out duration-500`}
      >
        <div className="bg-white  py-[10px] flex justify-between items-center xl:hidden">
          <div className="invisible">
            <NavLink to="/">
              <h4 className="text-[25px] font-[900] text-primary">ACTLIP</h4>
            </NavLink>
          </div>
          <div className="hover:cursor-pointer">
            <IoCloseOutline
              className="text-[25px]"
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" xl:hidden">
            {/* <div className="  lg:px-[16px] h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "#2E3192" : "black" };
                  }}
                >
                  Home
                </NavLink>
              </h4>
            </div> */}
            <div className="h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center hover:cursor-pointer"
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "#2E3192" : "black" };
                  }}
                >
                  Home
                </NavLink>
              </h4>
            </div>
            <div className="  lg:px-[16px] h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
              >
                <NavLink
                  to="/news-and-articles"
                  style={({ isActive }) => {
                    return { color: isActive ? "#2E3192" : "black" };
                  }}
                >
                  News and Articles
                </NavLink>
              </h4>
            </div>
            <div className="  lg:px-[16px] h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
              >
                <NavLink
                  to="/policy-tracker"
                  style={({ isActive }) => {
                    return { color: isActive ? "#2E3192" : "black" };
                  }}
                >
                  Policy Tracker
                </NavLink>
              </h4>
            </div>
            <div className="  lg:px-[16px] h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
              >
                <NavLink
                  to="/about-us"
                  style={({ isActive }) => {
                    return { color: isActive ? "#2E3192" : "black" };
                  }}
                >
                  About Us
                </NavLink>
              </h4>
            </div>

            <div className="  lg:px-[16px] h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
              >
                <NavLink
                  to="/projects"
                  style={({ isActive }) => {
                    return { color: isActive ? "#2E3192" : "black" };
                  }}
                >
                  Projects
                </NavLink>
              </h4>
            </div>

            <div className="h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
              >
                <NavLink
                  to="/contact-us"
                  style={({ isActive }) => {
                    return { color: isActive ? "#2E3192" : "black" };
                  }}
                >
                  Contact Us
                </NavLink>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
