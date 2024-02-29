import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

function Header() {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-blue-400 via-primary01 to-pink-500 flex items-center justify-between   font-poppins py-[20px] xl:mx-[250px] lg:mx-[150px] shadow-xl">
        <div className="fixed lg:sticky z-40  flex items-center lg:py-0 py-[20px] top-0 bg-gradient-to-r from-blue-400 via-primary01 to-pink-500  w-full justify-between right-0 px-[15px] md:px-[30px] md:shadow-none shadow-xl">
          <div className="">
            <Link
              onClick={() => window.scrollTo({ top: 0 })}
              to="/login"
              className="text-primary01 text-[25px] font-bold italic hover:no-underline"
            >
              TraVail
            </Link>
          </div>

          <div className="">
            <Search />
          </div>
        </div>
        <div className="fixed lg:sticky bottom-0 right-0 left-0 px-[15px] md:px-[30px] lg:px-0 shadow-2xl shadow-gray-800 lg:shadow-none lg:h-0 h-[60px] flex items-center  bg-gradient-to-r from-pink-500 via-primary01 to-blue-400 z-40 lg:mr-[30px]">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Header;
