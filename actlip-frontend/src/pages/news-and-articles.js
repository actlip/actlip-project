import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import Carousel from "../components/Carousel";
import moment from "moment";

import LoadIcon from "../assets/loading.gif";

const NewsAndArticles = ({
  setPage,
  page,
  data,
  load,
  totalPages,
  setSearchPosts,
  posts,
  searchLoad,
  searchPosts,
}) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);

  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <div>
      <div className="bg-sky-200 py-[32px] md:py-[80px] px-[3%] lg:px-[5%] xl:px-[10%]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            Latest Updates
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[14px] leading-[26px] text-center md:w-[70%] text-gray-600 ">
              Stay informed with the latest news and updates related to
              technology law and innovation policy in Africa
            </h4>
          </div>
        </div>
      </div>
      <div className="px-[3%] lg:px-[5%] xl:px-[10%] pt-[30px] md:pt-[50px] pb-[50px] bg-gray-100">
        <div className="flex relative justify-end  w-[100%] md:w-[400px]">
          <input
            className="pr-[14px] pl-[40px] py-[12px] w-full focus:outline-none border-b-2 border-primary1 focus:border-primary1  focus:border-2 rounded-t-[6px] text-gray-900 text-[12px]"
            autoComplete="on"
            name="searchPosts"
            type="text"
            placeholder="Search news"
            value={searchPosts}
            id="searchPosts"
            onChange={(e) =>
              setSearchPosts(e.target.value.toLowerCase().replace(/ /g, ""))
            }
          />
          <CiSearch className="absolute top-1/2 left-[14px] transform  -translate-y-1/2" />
        </div>
        {searchPosts && (
          <div className="w-[100%] md:w-[400px] px-[2%] py-[10px] md:py-[15px] bg-sky-100 grid grid-cols-1 gap-[15px] rounded-b-[8px]">
            {" "}
            <div className="mx-auto ">
              {searchLoad && (
                <div className=" z-40  h-[50px] flex justify-center items-center">
                  <img className="w-[30px]" src={LoadIcon} alt="loading" />
                </div>
              )}
            </div>
            {posts.map((post) => (
              <div className=" " key={post._id}>
                <Link to={`news-and-articles/${post._id}`}>
                  <h4 className="line-clamp-2 text-[14px]">{post.head}</h4>
                </Link>
              </div>
            ))}
            {posts.length === 0 && !searchLoad ? (
              <h4 className="text-[14px] text-gray-800 h-[50px] flex justify-center items-center font-[600]">
                No results for your search
              </h4>
            ) : (
              <div></div>
            )}
          </div>
        )}
        <div className="md:flex justify-between mt-[30px] border-double border-b-[3px] border-black pb-[10px]">
          <h4 className="text-[12px] font-[600] font-pirate">
            {formattedDate}
          </h4>
          <div className="text-[30px] md:text-[40px] font-[600]">
            News And Articles
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[20px] gap-x-[40px] mt-[30px]">
          {data.map((post) => (
            <div
              key={post._id}
              className="grid grid-cols-1 md:grid-cols-2 gap-[10px] pb-[20px] border-b-[2px] border-gray-300"
            >
              <Link to={`news-and-articles/${post._id}`}>
                {post.images.length > 0 && (
                  <Carousel images={post.images} id={post._id} />
                )}
              </Link>
              <div className="flex flex-col">
                <h4 className="text-[18px] md:text-[22px] font-[600] leading-[28px] line-clamp-2">
                  {post.head}
                </h4>
                <h4 className="text-gray-800 text-[14px] mt-[10px] line-clamp-4 leading-[22px]">
                  {post.content}
                </h4>
                <h4 className="text-[12px] font-[600] mt-auto pt-[20px]">
                  {moment(post.createdAt).format("dddd, MMMM D, YYYY")}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[30px]">
          {load && ( // Display load icon when loading
            <div className="w-[40px] mx-auto">
              <img src={LoadIcon} alt="loading" />
            </div>
          )}
          {page < totalPages && !load && (
            <button
              className="btn btn-dark mx-auto d-block mb-[20px]"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;
