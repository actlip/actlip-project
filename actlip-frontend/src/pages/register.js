import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import logo from "../assets/logo-t1.png";
import background from "../assets/background.png";
import { css } from "@emotion/react";
import { register } from "../redux/actions/authAction";

function Register() {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: "",

    email: "",
    password: "",
    cf_password: "",
    passcode: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, email, passcode, password, cf_password } = userData;
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const toggle1 = () => {
    setOpen1(!open1);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div>
      <div className="bg-sky-100 px-[15px] md:px-[30px] font-poppins py-[40px] xl:px-[250px] lg:px-[150px]    md:pb-[50px] pb-[100px] items-center md:flex h-full">
        <div className="font-poppins lg:px-10 sm:w-3/4 mx-auto lg:my-0">
          <div>
            <div className="w-[100px] md:w-[120px] mx-auto">
              <img src={logo} />
            </div>
            <h4 className="flex justify-center text-3xl font-semibold mb-[16px] text-white"></h4>
            <h4 className="flex justify-center text-xs font-medium text-gray-700">
              Admin Sign in
            </h4>
          </div>

          <form className="mt-[24px]" onSubmit={handleSubmit}>
            <div className="">
              <div className="mb-[24px]">
                <div className="flex justify-center">
                  <input
                    className={
                      alert.fullname
                        ? "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full border-red-400"
                        : "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    }
                    autoComplete="on"
                    name="fullname"
                    type="text"
                    placeholder="Enter full name"
                    onChange={handleChangeInput}
                    value={fullname}
                  />
                </div>
                <h2 className="text-red-400 text-sm font-light mt-[10px]">
                  {alert.fullname ? alert.fullname : ""}
                </h2>
              </div>

              <div className="mt-[24px]">
                <div className="flex justify-center">
                  <input
                    className={
                      alert.email
                        ? "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full border-red-400"
                        : "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    }
                    autoComplete="on"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    onChange={handleChangeInput}
                    value={email}
                  />
                </div>
                <h2 className="text-red-400 text-sm font-light mt-[10px]">
                  {alert.email ? alert.email : ""}
                </h2>
              </div>

              <div className="mt-[24px]">
                <div className="flex justify-center">
                  <input
                    className={
                      alert.passcode
                        ? "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full border-red-400"
                        : "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    }
                    autoComplete="on"
                    name="passcode"
                    type="text"
                    placeholder="Enter passcode"
                    onChange={handleChangeInput}
                    value={passcode}
                  />
                </div>
                <h2 className="text-red-400 text-sm font-light mt-[10px]">
                  {alert.passcode ? alert.passcode : ""}
                </h2>
              </div>

              <div className="mt-[24px]">
                <div className="flex justify-center relative">
                  <input
                    className={
                      alert.password
                        ? "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full border-red-400"
                        : "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    }
                    autoComplete="on"
                    name="password"
                    type={open === false ? "password" : "text"}
                    placeholder="Enter your password"
                    onChange={handleChangeInput}
                    value={password}
                  />
                  <div className="absolute right-[25px] top-[15px] text-2xl">
                    {open === false ? (
                      <AiFillEyeInvisible onClick={toggle} />
                    ) : (
                      <AiFillEye onClick={toggle} />
                    )}
                  </div>
                </div>
                <h2 className="text-red-400 text-sm font-light mt-[10px]">
                  {alert.password ? alert.password : ""}
                </h2>
              </div>
              <div className="mt-[24px]">
                <div className="flex justify-center relative">
                  <input
                    className={
                      alert.cf_password
                        ? "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full border-red-400"
                        : "placeholder-gray-400 py-[18px] rounded-[8px] border-[0.5px] text-sm text-black pl-[32px] w-full "
                    }
                    autoComplete="on"
                    name="cf_password"
                    type={open1 === false ? "password" : "text"}
                    placeholder="Enter your password"
                    onChange={handleChangeInput}
                    value={cf_password}
                  />
                </div>
                <h2 className="text-red-400 text-sm font-light mt-[10px]">
                  {alert.cf_password ? alert.cf_password : ""}
                </h2>
              </div>
            </div>

            <div className=" mt-[64px]">
              <button
                type="submit"
                className="text-white text-sm font-medium bg-primary1 hover:bg-sky-900 w-full h-[55px] rounded-[8px] "
              >
                {loading === true ? (
                  <ClipLoader
                    color={"#ffff"}
                    loading={loading}
                    css={override}
                    size={30}
                  />
                ) : (
                  <p className="">Register</p>
                )}
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-[64px]">
            <h4 className="text-sm font-medium text-gray-400">
              Already have an account?
            </h4>
            <h4 className="text-sm font-medium text-blue-400  ml-1 ">
              <Link to="/login">Login Now</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
