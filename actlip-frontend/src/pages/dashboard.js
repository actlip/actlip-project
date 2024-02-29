import React, { useEffect } from "react";
import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import { Link } from "react-router-dom";
import LoadIcon from "../assets/loading.gif";
import logo from "../assets/logo-t1.png";
import { LuLogOut } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";

let scroll = 0;

function Dashboard() {
  const { homePosts, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    if (window.location.pathname === "/login") {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className=" font-poppins pb-[50px]">
      <div className="">
        <div className="px-[3%] lg:px-[5%] xl:px-[10%] h-[70px] flex items-center justify-between bg-sky-100">
          <div className="w-[80px] md:w-[100px]">
            <img src={logo} />
          </div>

          <Link
            onClick={() => {
              dispatch(logout());
            }}
            className="text-[16px] my-[5px] flex justify-end cursor-pointer hover:font-semibold font-medium hover:no-underline"
            to="/login"
          >
            <LuLogOut className="text-[25px]" />
          </Link>
        </div>
        <Status />

        <div className="mt-[40px]">
          {homePosts.loading ? (
            <div className="w-[40px] mx-auto mt-[100px]">
              <img src={LoadIcon} alt="loading" />
            </div>
          ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
            <div>
              <h2 className="text-center text-[25px] font-[500] pt-[20px] justify-center h-[200px] flex items-center">
                No post
              </h2>
            </div>
          ) : (
            <Posts />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
