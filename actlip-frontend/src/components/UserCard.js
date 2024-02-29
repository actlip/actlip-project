import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserCard({
  children,
  user,
  border,
  handleClose,
  setShowFollowers,
  setShowFollowing,
  msg,
}) {
  const handleCloseAll = () => {
    if (handleClose) handleClose();
    if (setShowFollowers) setShowFollowers(false);
    if (setShowFollowing) setShowFollowing(false);
  };

  const showMsg = (user) => {
    return (
      <>
        <div className="text-gray-500">{user.text.slice(0, 15)}</div>
        {user.media.length > 0 && (
          <div className="flex items-center text-[15px] text-gray-500">
            {user.media.length}
            <div className="material-icons text-[20px] text-gray-500 ml-[2px]">
              image
            </div>
          </div>
        )}
        {user.call && (
          <span className="material-icons text-gray-500">
            {user.call.times === 0
              ? user.call.video
                ? "videocam_off"
                : "phone_disabled"
              : user.call.video
              ? "video_camera_front"
              : "call"}
          </span>
        )}
      </>
    );
  };

  return (
    <div className={` ${border} flex  justify-between items-center w-full`}>
      <div>
        <Link
          className="flex py-[7px] pr-[7px] items-center "
          to={`/login/profile/${user._id}`}
          onClick={handleCloseAll}
        >
          <div>
            <div className="w-[45px] ">
              <Avatar src={user.avatar} />
            </div>
          </div>

          <div className="ml-[10px]">
            <h4 className="text-[15px] text-blue-500 mb-[5px] hover:text-blue-700 hover:text-[15.5px]">
              {user.username}
            </h4>
            <h4 className="text-[12px] text-blue-400 mt-[5px]">
              {msg ? showMsg(user) : user.job}
            </h4>
          </div>
        </Link>
      </div>

      {children}
    </div>
  );
}

export default UserCard;
