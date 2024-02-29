import React from "react";
import CardBody from "./home/post_card/CardBody";
import CardHeader from "./home/post_card/CardHeader";

function PostCard({ post }) {
  return (
    <div className=" border border-gray-200 bg-gray-100">
      <CardBody post={post} />
      <CardHeader post={post} />
    </div>
  );
}

export default PostCard;
