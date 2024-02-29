import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LiaBinocularsSolid } from "react-icons/lia";
import { MdAltRoute } from "react-icons/md";
import idea from "../assets/idea.jpg";
import profile from "../assets/profile.jpg";

const AboutUs = () => {
  const { auth } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);
  return (
    <div className="">
      {/* <div className="bg-aboutbg bg-no-repeat z-10   w-full bg-cover bg-center xl:h-[879px] h-[555px]  relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col gap-[40px] md:gap-[0px] md:gap-y-[80px] lg:gap-y-[120px] xl:gap-y-[160px] pt-[100px]">
        <div>
          <h4 className="text-[48px] font-medium text-yellow-400 flex justify-center xl:text-[72px]">
            99.9%
          </h4>
          <h4 className="text-[18px] font-medium text-white flex justify-center xl:text-[34px]">
            Client Satisfaction
          </h4>
        </div>
        <div className="md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3">
          <h4 className="text-[48px] font-medium text-yellow-400 flex justify-center xl:text-[72px]">
            1000+
          </h4>
          <h4 className="text-[18px] font-medium text-white flex justify-center xl:text-[34px]">
            Perspiciatis unde omnis
          </h4>
        </div>
        <div className="md:col-start-3 md:col-end-4">
          <h4 className="text-[48px] font-medium text-yellow-400 flex justify-center xl:text-[72px]">
            #1
          </h4>
          <h4 className="text-[18px] font-medium text-white flex justify-center xl:text-[34px]">
            News and articles
          </h4>
        </div>
      </div> */}

      <div className="px-[2%] md:px-[3%] lg:px-[5%] 2xl:px-[10%] py-[40px] md:py-[80px] lg:py-[50px] bg-primary1  grid grid-cols-1 md:grid-cols-2">
        <h4 className="xl:text-[35px] text-[20px] md:text-[25px] font-semibold mb-[15px] md:mb-[0px] text-gray-200">
          Overview
        </h4>
        <h4 className="text-[14px] text-gray-200 xl:text-[18px] leading-[25px]">
          Learn about our journey, mission, and core values that drive our
          efforts to navigate the intersection of technology, law, and
          innovation.
        </h4>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-[33px] pb-[24px] md:pb-[40px] xl:pb-[88px] items-centerpx-[3%] lg:px-[5%] xl:px-[10%] mt-[50px]">
        <div className="">
          <img src={idea} />
        </div>
        <div className="px-[15px] md:px-[0px]">
          <h4 className="text-[20px] lg:text-[38px] font-semibold mb-[15px]">
            Brief history about the ACTLIP, and our approach for the future.
          </h4>
          <h4 className="lg:text-[20px] text-[12px] md:text-[16px]">
            Discover our unique approach and methodologies that position us as a
            leading force in shaping technology policies.
          </h4>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[10%] py-[91px] bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end">
        <div>
          <div className="flex justify-center lg:mb-[20px] mb-[8px]">
            <LiaBinocularsSolid className="text-[50px] text-primary1" />
          </div>
          <h4 className="flex justify-center text-[28px] lg:text-[45px] font-semibold mb-[4px] lg:mb-[15px]">
            Vision
          </h4>
          <h4 className="text-center text-[16px] lg:text-[20px] flex justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h4>
        </div>
        <div>
          <div className="flex justify-center lg:mb-[20px] mb-[8px]">
            <MdAltRoute className="text-[50px] text-primary1" />
          </div>
          <h4 className="flex justify-center text-[28px] lg:text-[45px] font-semibold mb-[4px] lg:mb-[15px]">
            Mission
          </h4>
          <h4 className="text-center text-[16px] lg:text-[20px] flex justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h4>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="mb-[24px]">
          <h1 className="flex justify-center text-center text-[20px] lg:text-[25px] font-semibold">
            The Core of Our Team
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-center text-[16px] lg:text-[20px] text-gray-600 ">
              Meet the passionate individuals and experts behind our
              initiatives, working together to create a tech-savvy legal
              ecosystem
            </h4>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-[32px] mt-[64px]">
          <div className="flex justify-center">
            <div>
              <div>
                <img className="" src={profile} />
              </div>
              <h4 className="mt-[16px] font-semibold md:text-[20px] text-[18px] ">
                John Doe
              </h4>
              <h4 className=" font-normal md:text-[16px] text-[14px] ">
                Chairman
              </h4>
            </div>
          </div>

          <div className="flex justify-center mt-[32px] lg:mt-[0px]">
            <div>
              <div>
                <img className="" src={profile} />
              </div>
              <h4 className="mt-[16px] font-semibold md:text-[20px] text-[18px] ">
                Paul Graham
              </h4>
              <h4 className=" font-normal md:text-[16px] text-[14px] ">CEO</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
