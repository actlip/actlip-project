import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataApi } from "../../utils/fetchData";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import UserCard from "../UserCard";
import LoadIcon from "../../assets/loading.gif";

function Search() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoad(false);
    if (search || job || location) {
      setLoad(true);
      getDataApi(
        `search?username=${search}&job=${job}&address=${location}`,
        auth.token
      )
        .then((res) => {
          setUsers(res.data.users);
          setLoad(false);
        })
        .catch((err) => {
          dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg },
          });
        });
    } else {
      setUsers([]);
    }
  }, [job, search, location, auth.token, dispatch]);

  const handleClose = () => {
    setSearch("");
    setJob("");
    setLocation("");
    setUsers([]);
  };

  return (
    <div className="">
      <div className="relative ">
        <div
          className="cursor-pointer"
          onClick={() => {
            setShow(!show);
            handleClose();
          }}
        >
          <h4 className="hidden md:flex text-[17px] font-medium text-primary01 hover:text-blue-800">
            Search
          </h4>
          <div className="flex md:hidden text-white">
            <span class="material-icons">search</span>
          </div>
        </div>
        {show ? <></> : null}
        <form
          className={`absolute w-[250px] lg:-right-[90px]  right-0 top-[50px]  ${
            show ? "translate-y-0 bg-white z-10" : "-translate-y-[700px]  "
          } ease-in-out duration-700`}
        >
          <div className="mb-[15px]">
            <div className="flex justify-center">
              <input
                className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full  "
                autoComplete="on"
                name="search"
                type="text"
                placeholder="Search with username"
                value={search}
                id="search"
                onChange={(e) =>
                  setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
                }
              />
            </div>
          </div>
          <div className="mb-[15px]">
            <div className="flex justify-center">
              <input
                className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full  "
                autoComplete="on"
                name="location"
                type="text"
                placeholder="Search with location"
                value={location}
                id="location"
                onChange={(e) =>
                  setLocation(e.target.value.toLowerCase().replace(/ /g, ""))
                }
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <input
                className="placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full  "
                autoComplete="on"
                name="job"
                type="text"
                placeholder="Search with work type"
                value={job}
                id="job"
                onChange={(e) =>
                  setJob(e.target.value.toLowerCase().replace(/ /g, ""))
                }
              />
            </div>
          </div>
        </form>
        <div
          className={
            show
              ? "top-[253px]  absolute right-0 w-[250px] lg:-right-[90px] z-10"
              : "hidden"
          }
        >
          {load && (
            <div className="w-[30px] absolute z-40 left-[115px]">
              <img src={LoadIcon} alt="loading" />
            </div>
          )}
          <div
            className="bg-white h-[300px]  overflow-auto"
            onClick={() => {
              setShow(!show);
              handleClose();
            }}
          >
            {(search || job || location) &&
              users.map((user) => (
                <div
                  key={user.username}
                  className={
                    user.category === "client" ? "hidden" : "flex w-[250px]"
                  }
                >
                  <UserCard
                    key={user._id}
                    user={user}
                    border="border"
                    onClick={() => {
                      setShow(!show);
                      handleClose();
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
