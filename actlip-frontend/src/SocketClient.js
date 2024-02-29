import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const spawnNotification = (body, icon, url, title) => {
  let options = {
    body,
    icon,
  };

  let n = new Notification(title, options);

  n.onclick = (e) => {
    e.preventDefault();
    window.open(`login${url}`, "_blank");
  };
};

const SocketClient = () => {
  const { auth, socket, notify, online, call } = useSelector((state) => state);
  const dispatch = useDispatch();

  const audioRef = useRef();

  return (
    <>
      {/* <audio
        className="mt-[50px]"
        controls
        ref={audioRef}
        style={{ display: "none" }}
      >
        <source src={audiobell} type="audio/mp3" />
      </audio> */}
    </>
  );
};

export default SocketClient;
