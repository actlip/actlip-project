import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross1, RxCaretDown } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import Avatar from "../Avatar";
import NotifyModal from "../NotifyModal";

function Menu() {
  const [show2, setShow2] = useState(false);

  const [show, setShow] = useState(false);

  const navLinks = [
    { label: "Home", icon: "home", path: "/login" },
    { label: "Message", icon: "near_me", path: "/login/message" },
    { label: "Discover", icon: "explore", path: "/login/discover" },
  ];

  const { auth, theme, notify } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };

  return (
    <div className="flex justify-around w-full menu ">
      {navLinks.map((link, index) => (
        <h2 className={`w-full flex ${isActive(link.path)}`} key={index}>
          <Link to={link.path} className={` cursor-pointer   lg:mx-[20px]`}>
            <span className=" material-icons  text-white">{link.icon}</span>
          </Link>
        </h2>
      ))}

      <div className="relative w-full flex justify-start">
        <div
          onClick={() => setShow(!show)}
          closeclassName="flex  justify-center"
        >
          <h4
            onClick={() => setShow(!show)}
            className={` text-[15px] font-normal text-black  cursor-pointer hover:font-semibold hover:duration-300 hover:ease-in-out ${
              show
                ? "font-normal text-[17px] flex justify-center"
                : "font-normal text-[17px] flex justify-center"
            }`}
          >
            <div className="position-relative lg:ml-[15px]">
              <span
                className="material-icons relative text-[28px]"
                style={{ color: notify.data.length > 0 ? "crimson" : "white" }}
              >
                notifications
              </span>
              <span className="absolute left-1/3 top-[7px] text-[13px] text-white">
                {notify.data.length}
              </span>
            </div>
          </h4>
        </div>
        {show ? (
          <div
            className="absolute rounded-[5px] right-[1px]   border border-gray-200   top-auto lg:top-[53px] bottom-[45px] bg-white  z-40"
            onClick={() => setShow(!show)}
            style={{ transform: "translateX(30px)" }}
          >
            <NotifyModal />{" "}
          </div>
        ) : null}
      </div>

      <div className="relative">
        <div onClick={() => setShow2(!show2)} className="flex  justify-center">
          <h4
            onClick={() => setShow2(!show2)}
            className={` text-[15px] font-normal text-black  cursor-pointer hover:font-semibold hover:duration-300 hover:ease-in-out lg:ml-[25px]   ${
              show2
                ? "font-normal text-[17px] flex justify-center"
                : "font-normal text-[17px] flex justify-center"
            }`}
          >
            {auth.token ? (
              <div className="w-[25px]">
                <Avatar src={auth.user.avatar} />
              </div>
            ) : null}
          </h4>
        </div>

        {show2 ? (
          <div className="absolute rounded-[5px] right-[1px] w-[100px] border border-gray-200 px-[5px]  top-auto lg:top-[30px] bottom-full bg-blue-50 h-[60px] z-40">
            <Link
              onClick={() => setShow2(!show2)}
              className="text-[16px] flex justify-end  my-[5px] cursor-pointer hover:font-semibold font-medium hover:no-underline"
              to={`/login/profile/${auth.user._id}`}
            >
              Profile
            </Link>

            <Link
              onClick={() => {
                dispatch(logout());
                setShow2(!show2);
              }}
              className="text-[16px] my-[5px] flex justify-end cursor-pointer hover:font-semibold font-medium hover:no-underline"
              to="/login"
            >
              Logout
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Menu;
