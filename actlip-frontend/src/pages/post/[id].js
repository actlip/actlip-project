import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../redux/actions/postAction";
import LoadIcon from "../../assets/loading.gif";
import Carousel from "../../components/Carousel";
import PostCard from "../../components/PostCard";
import logo from "../../assets/logo-t1.png";
import { LuLogOut } from "react-icons/lu";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/authAction";
import moment from "moment";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { deletePost } from "../../redux/actions/postAction";
import { BASE_URL } from "../../utils/config";
import CardHeader from "../../components/home/post_card/CardHeader";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const [show, setShow] = useState(false);

  const { auth, detailPost, socket } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPost({ detailPost, id, auth }));

    if (detailPost.length > 0) {
      const newArr = detailPost.filter((post) => post._id === id);
      setPost(newArr);
    }
  }, [detailPost, dispatch, id, auth]);

  useEffect(() => {
    if (!auth.token) history.push("/");
  }, [auth.token, history]);

  return (
    <div className="pb-[50px]">
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

      <div className="px-[3%] lg:px-[5%] xl:px-[10%] mt-[30px]">
        {post.length === 0 && (
          <div className="w-[40px] mx-auto mt-[100px]">
            <img src={LoadIcon} alt="loading" />
          </div>
        )}
        {post.map((post) => {
          return (
            <div className="">
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
        })}
      </div>
    </div>
  );
}

export default Post;
