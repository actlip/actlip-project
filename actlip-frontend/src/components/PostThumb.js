import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PostThumb({ posts, result }) {
  if (result === 0)
    return (
      <h2 className="text-center text-[25px] font-semibold mt-[100px] lg:mt-[150px]">
        No Post
      </h2>
    );

  return (
    <div className="post_thumb ">
      {posts.map((post) => (
        <Link key={post._id} to={`/login/post/${post._id}`}>
          <div className="post_thumb_display">
            {post.images[0].url?.match(/video/i) ? (
              <video
                controls
                src={post.images[0].url}
                alt={post.images[0].url}
              />
            ) : (
              <img src={post.images[0].url} alt={post.images[0].url} />
            )}

            <div className="post_thumb_menu">
              <i className="">{post.likes.length}likes</i>
              <i className="">{post.comments.length}comments</i>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostThumb;
