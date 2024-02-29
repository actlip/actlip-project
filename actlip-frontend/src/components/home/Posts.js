import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../PostCard";
import LoadIcon from "../../assets/loading.gif";
import LoadMoreBtn from "../LoadMoreBtn";
import { getDataApi } from "../../utils/fetchData";
import { POST_TYPES } from "../../redux/actions/postAction";

function Posts() {
  const { homePosts, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(`posts?limit=${homePosts.page * 10}`);
    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: homePosts.page + 1 },
    });
    setLoad(false);
  };
  return (
    <div className=" lg:px-[5%] xl:px-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {homePosts.posts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>

      <div className="mt-[30px]">
        {load && (
          <div className="w-[40px] mx-auto">
            <img src={LoadIcon} alt="loading" />
          </div>
        )}

        <LoadMoreBtn
          result={homePosts.result}
          page={homePosts.page}
          load={load}
          handleLoadMore={handleLoadMore}
        />
      </div>
    </div>
  );
}

export default Posts;
