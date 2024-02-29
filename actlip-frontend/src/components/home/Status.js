import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

function Status() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="md:flex justify-between items-center px-[3%] lg:px-[5%] xl:px-[10%] bg-sky-200 py-[10px]">
      <h4 className="whitespace-nowrap capitalize">
        <b className="text-[18px]"> Admin:</b> {auth.user.fullname}
      </h4>
      <button
        className="px-[20px] py-[10px] rounded-[8px] bg-primary1 text-white text-[14px] hover:bg-sky-900 w-full md:w-fit mt-[20px] md:mt-[0px]"
        onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
      >
        Post News
      </button>
    </div>
  );
}

export default Status;
