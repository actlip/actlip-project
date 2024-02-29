import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Carousel from "../../Carousel";
import moment from "moment";

function CardBody({ post }) {
  const [readMore, setReadMore] = useState(false);

  // const handleReadMore = () => {

  // }

  return (
    <div>
      <div className="card_body font-poppins">
        <Link to={`login/post/${post._id}`}>
          {post.images.length > 0 && (
            <Carousel images={post.images} id={post._id} />
          )}
        </Link>
        <div className="card_body-content  h-[200px] px-[15px]  font-poppins py-[20px] flex flex-col">
          <h4 className="text-[18px] md:text-[22px] font-[600] leading-[28px] line-clamp-2">
            {post.head}
          </h4>
          <h4 className="text-gray-800 text-[14px] mt-[10px] line-clamp-3 leading-[22px]">
            {post.content}
          </h4>
          <h4 className="text-[12px] font-[600] mt-auto">
            {moment(post.createdAt).format("dddd, MMMM D, YYYY")}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
