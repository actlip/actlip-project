import React from "react";
import { useSelector } from "react-redux";

function Avatar({ src }) {
  return <img className="w-[150px] rounded-full" src={src} alt="avatar" />;
}

export default Avatar;
