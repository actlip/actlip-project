import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Carousel from "../components/Carousel";
import LoadIcon from "../assets/loading.gif";

const News = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://actlip.onrender.com/api/news/${match.params.id}`
        );
        setPost(response.data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [match.params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post)
    return (
      <div className="w-[40px] mx-auto mt-[80px] h-screen">
        <img src={LoadIcon} alt="loading" />
      </div>
    );

  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[10%] pt-[30px] md:pt-[50px] pb-[50px] bg-gray-100">
      {" "}
      <Carousel images={post.images} id={post._id} />{" "}
      <h4 className="text-[18px] md:text-[22px] font-[600] leading-[28px] text-gray-700 mt-[20px]">
        {post.head}
      </h4>
      <h4 className="text-gray-800 text-[14px] mt-[10px] leading-[22px]">
        {post.content}
      </h4>
      <h4 className="text-[12px] font-[600] mt-[10px]">
        {moment(post.createdAt).format("dddd, MMMM D, YYYY")}
      </h4>
    </div>
  );
};

export default News;
