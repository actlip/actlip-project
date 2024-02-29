import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion as m } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaBinocularsSolid } from "react-icons/lia";
import { MdAltRoute } from "react-icons/md";

import crown from "../assets/crown.png";
import moment from "moment";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import quote1 from "../assets/quote1.png";
import quote2 from "../assets/quote2.png";
import flash from "../assets/flash.png";
import flash2 from "../assets/flash2.png";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

const Home = ({ posts }) => {
  const { auth } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage >= 4 ? 1 : prevImage + 1));
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getImageUrl = () => {
    switch (currentImage) {
      case 1:
        return pic1;
      case 2:
        return pic2;
      case 3:
        return pic3;
      case 4:
        return pic4;
      default:
        return "";
    }
  };

  return (
    <div>
      <div
        className={`bg-no-repeat z-10  w-full bg-cover bg-center h-full pt-[100px] pb-[200px] md:py-[120px] lg:py-[180px] 2xl:py-[300px] px-[3%] lg:px-[5%] xl:px-[10%] relative transition-all duration-700 ease-in-out`}
        style={{
          backgroundImage: `url(${getImageUrl()})`,
        }}
      >
        <div>
          <div className=" py-[58px] px-[3%] lg:px-[5%] xl:px-[10%] lg:grid grid-cols-2 items-center gap-[20px]">
            <div className="relative">
              <m.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  x: { duration: 1 },
                }}
                className="absolute -top-[30px] -left-[10px] hidden lg:flex"
              >
                <img className="filter invert" src={crown} />
              </m.div>
              <div>
                <m.h4
                  initial={{ opacity: 1, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    x: { duration: 1 },
                  }}
                  className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold  text-white lg:text-start leading-10 md:leading-[50px]"
                >
                  African Center for
                </m.h4>
                <m.h4
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    x: { duration: 1 },
                  }}
                  className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold text-white   lg:text-start leading-10 md:leading-[50px]"
                >
                  Technology Law and
                </m.h4>
                <m.div
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.5,
                    x: { duration: 1 },
                  }}
                  className="flex"
                >
                  <h4 className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold text-white  mr-[10px] leading-10 md:leading-[50px]">
                    Innovation
                  </h4>
                  <h4 className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold  text-white leading-10 md:leading-[50px]">
                    Policy
                  </h4>
                </m.div>
              </div>
              <m.h4
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  x: { duration: 1 },
                }}
                className="mt-[24px] text-[16px] md:text-[18px] text-center text-white lg:text-start"
              >
                Catalyzing a profound impact on the African technology and
                innovation ecosystems through rigorous research, impactful
                advocacies, vibrant fellowships, scholarly journals, and
                transformative workshops. We believe in the power of informed
                discourse to shape policies that not only reflect the dynamic
                nature of technology but also ensure equitable access and
                benefits for all.
              </m.h4>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[10%] py-[40px]">
        <h4 className="mb-[32px] flex justify-center text-[18px] md:text-[24px] font-[600]">
          What's New?
        </h4>
        <div className="slider flex">
          <div className="slide-track  flex gap-[30px] items-start">
            {posts.map((post) => (
              <div key={post._id} className="slide max-w-[250px]">
                <Link to={`news-and-articles/${post._id}`}>
                  <div
                    style={{
                      paddingBottom: "60%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={post.images[0].url}
                      alt="Background"
                    />
                  </div>
                </Link>
                <div className="w-[250px]">
                  <h4 className="text-[14px] font-[600] mt-[20px]">
                    {moment(post.createdAt).format("dddd, MMMM D, YYYY")}
                  </h4>
                  <h4 className="text-[16px] font-[600] mt-[10px] truncate w-[250px]">
                    {post.head}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-sky-100 py-[50px] md:py-[80px] px-[10%] xl:px-[25%]">
        <h4 className="mb-[32px] flex justify-center text-[18px] md:text-[24px] font-[600]">
          Introductory note
        </h4>
        <h4 className="md:text-[14px] text-[12px] md:leading-[20px] leading-[15px]">
          It is now longer news. However, it worth recounting, that Africa has
          the youngest population in the world and is blessed with huge
          resources in its nature and humans. However, so many potentials remain
          untapped and the resources are not exploited maximally for Africa’s
          prosperity.
        </h4>

        <h4 className="md:text-[14px] text-[12px] mt-[40px] md:leading-[20px] leading-[15px]">
          Innovation and technology can cause increasing forward motion to
          Africa’s economy. This possibility will only be catalyzed and realized
          through right policies and laws. Carving the right technology laws and
          innovation policies is possible, not through copying and adopting
          foreign modes, but by undertaking specific deeply rooted studies and
          research into the African ecosystems towards designing and deploying
          regulatory frameworks that fit our unique spatial realities. ACTLIP is
          set up to embark on this much needed studies and research.
        </h4>

        <h4 className="md:text-[14px] text-[12px] mt-[40px] md:leading-[20px] leading-[15px]">
          Through researches and strategic partnerships, ACTLIP will help
          African states to discover and map regulatory approaches that can
          advance innovation and technological advancements. ACTLIP adopts
          mission-oriented and open approaches towards its goals. ACTLIP shall,
          among others:
        </h4>

        <div className="flex   mt-[20px]">
          <div className="w-[40px]">
            <h4 className="text-[16px] font-[600] w-[60px]">i.</h4>
          </div>
          <h4 className="md:text-[14px] text-[12px]">
            Onboard an inaugural think-tank and annual research fellowship with
            members from young researchers and practitioners interested in
            Africa’s tech and innovation ecosystems;
          </h4>
        </div>

        <div className="flex   mt-[20px]">
          <div className="w-[40px]">
            <h4 className="text-[16px] font-[600] w-[60px]">ii.</h4>
          </div>
          <h4 className="md:text-[14px] text-[12px]">
            Publish periodic policy trackers;
          </h4>
        </div>

        <div className="flex   mt-[20px]">
          <div className="w-[40px]">
            <h4 className="text-[16px] font-[600] w-[60px]">iii.</h4>
          </div>
          <h4 className="md:text-[14px] text-[12px]">
            Conduct researches on different relevant topics and publish reports
            on a regular basis;
          </h4>
        </div>

        <div className="flex   mt-[20px] ">
          <div className="w-[40px]">
            <h4 className="text-[16px] font-[600] w-[60px]">iv.</h4>
          </div>
          <h4 className="md:text-[14px] text-[12px]">
            Prepare an open proposal and study materials towards partnering with
            law and social science departments in African institutions to
            optimally train students on “innovation and technology regulations”;
          </h4>
        </div>

        <div className="flex   mt-[20px]">
          <div className="w-[40px]">
            <h4 className="text-[16px] font-[600] w-[60px]">vi.</h4>
          </div>
          <h4 className="md:text-[14px] text-[12px]">
            Organize mission-oriented annual seminars and webinars (mostly
            across across Africa); and
          </h4>
        </div>

        <div className="flex   mt-[20px]">
          <div className="w-[40px]">
            <h4 className="text-[16px] font-[600] w-[60px]">vi.</h4>
          </div>
          <h4 className="md:text-[14px] text-[12px]">
            Organize mission-oriented annual seminars and webinars (mostly
            across across Africa); and
          </h4>
        </div>

        <div className="flex   mt-[20px]">
          <div className="w-[40px]">
            <h4 className="text-[16px] font-[600] w-[60px]">vii.</h4>
          </div>
          <h4 className="md:text-[14px] text-[12px]">
            vii.Recommend Regulatory changes and contribute to policy-making,
            discourse, and legislative drafting across African nations; among
            others
          </h4>
        </div>
      </div>

      <div className="bg-sky-200 py-[50px] md:py-[80px] px-[5%] xl:px-[12%]">
        <h4 className="mb-[32px] flex justify-center text-[18px] md:text-[24px] font-[600]">
          About our think-tank
        </h4>

        <div className="bg-sky-100 py-[50px] md:py-[80px] px-[5%] xl:px-[12%] rounded-[15px]">
          <h4 className="md:text-[14px] text-[12px] md:leading-[20px] leading-[15px] ">
            Our think-tank, comprised of dedicated researchers and thinkers, is
            poised to embark on a transformative journey aimed at addressing the
            critical gaps in innovation policies and technology laws across
            Africa. Beginning in April 2024, our think-tank will convene regular
            meetings, with a commitment to hold at least two gatherings each
            month. These meetings will serve as a forum for deliberate and
            profound discussions, where members will analyze existing
            challenges, identify opportunities, and propose actionable solutions
            to drive meaningful change.
          </h4>

          <h4 className="md:text-[14px] text-[12px] mt-[40px] md:leading-[20px] leading-[15px]">
            Furthermore, our quarterly meetings will be mission-oriented,
            focusing on specific thematic areas related to innovation policy and
            technology law in Africa. Each quarter, our discussions will be
            guided by a shared mission, with the aim of deepening our
            understanding of key issues and generating innovative ideas that can
            inform policy formulation and drive positive outcomes.
          </h4>

          <h4 className="md:text-[14px] text-[12px] mt-[40px] md:leading-[20px] leading-[15px]">
            The insights and perspectives gleaned from our meetings will be
            published as part of our quarterly reports, ensuring that our
            collective knowledge and expertise are disseminated widely and made
            accessible to stakeholders across Africa and beyond. Through these
            reports, we will share our findings, recommendations, and
            thought-provoking insights, contributing to a richer understanding
            of the challenges and opportunities facing Africa's innovation
            ecosystem.
          </h4>

          <h4 className="md:text-[14px] text-[12px] mt-[40px] md:leading-[20px] leading-[15px]">
            Recognizing the importance of inclusivity and accessibility, our
            meetings will be conducted in a hybrid format, allowing participants
            to join either in person or virtually. This hybrid approach will
            enable us to maximize engagement and participation, ensuring that
            diverse voices and perspectives are represented in our
            deliberations.
          </h4>

          <h4 className="md:text-[14px] text-[12px] mt-[40px] md:leading-[20px] leading-[15px]">
            As we embark on this collective endeavor, our think-tank is
            committed to fostering a culture of collaboration, innovation, and
            excellence. By harnessing the collective expertise and insights of
            our members, we are confident that we can catalyze major changes and
            drive transformative impact in Africa's innovation landscape.
          </h4>
        </div>
      </div>

      <div className="bg-white py-[64px] px-[3%] lg:px-[5%] xl:px-[10%]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            More News and Articles
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[16px] md:text-[18px] font-[500] mb-[64px] lg:mb-[81px] text-center lg:w-[800px] text-gray-600 ">
              Reimagining African Tech: Catalyst for Growth, Inclusion, and
              Dynamic Innovation.
            </h4>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[50px]  xl:gap-[70px] items-center">
          <div className="md:col-start-2 md:col-end-3">
            <img className="rounded-[15px]" src={news2} />
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[35px] md:mt-[0px]">
            <div className="mb-[35px]">
              <div className="flex items-center gap-[20px]">
                <MdAltRoute className="text-[50px] text-primary1" />
                <h1 className="text-[16px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                  Our mission
                </h1>
              </div>
              <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px]  text-gray-600 ">
                To reimagine the formulation of technology law and innovation
                policy in Africa through empirical researches and intersectoral
                policy discourses.
              </h4>
            </div>

            <div className="mb-[35px]">
              <div className="flex items-center gap-[20px]">
                <LiaBinocularsSolid className="text-[50px] text-primary1" />
                <h1 className="text-[16px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                  Our vision
                </h1>
              </div>
              <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px] text-gray-600 ">
                To reshape and advance African technology and innovation
                ecosystems through research, law and policy.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sky-100 relative">
        <div className="absolute top-0 left-0 w-[82px] md:w-[347px]">
          <img src={flash} />
        </div>
        <div className="absolute bottom-0 right-0 w-[82px] md:w-[347px]">
          <img src={flash2} />
        </div>
        <div className="py-[64px] px-[3%] lg:px-[5%] xl:px-[10%]">
          <div className="xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:grid-flow-col md:gap-[25px]  xl:gap-[40px] items-center">
            <div className=" xl:col-start-2 xl:col-end-3 z-40 flex justify-center">
              <img className="rounded-[15px]" src={news1} />
            </div>
            <div className="xl:col-start-1 xl:col-end-2 z-40 mt-[32px] mb-[0px]">
              <div className="flex justify-center">
                <div className="z-40 ">
                  <div className="z-40 relative px-[18px] md:px-[30px] pt-[15px] pb-[7px] w-[230px]   md:w-[350px] xl:w-[390px]">
                    <div className="absolute top-0 left-0 md:w-[30px] w-[20px]">
                      <img src={quote1} />
                    </div>
                    <div className="absolute bottom-0 right-0 md:w-[30px] w-[20px]">
                      <img src={quote2} />
                    </div>
                    <div className="flex ">
                      <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold -mt-[10px] mr-[10px] z-40">
                        Latest
                      </h4>
                      <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold -mt-[10px] text-primary1 z-40">
                        Initiatives.
                      </h4>
                    </div>
                  </div>

                  <h4 className="mt-[10px] text-[12px] md:text-[16px]  z-40 px-[18px] md:px-[30px]">
                    Explore our latest impactful initiatives and innovations,
                    driving positive change in the technology landscape across
                    the continent.<br></br>
                    You can join the mission by becoming a part of our
                    think-tank or fellowship.
                  </h4>
                  <Link to="/news-and-articles">
                    <button className=" flex text-white bg-primary1 hover:bg-sky-900 items-center text-[12px] md:text-[16px] font-semibold mt-[43px] z-40 px-[18px] py-[12px] rounded-[30px] mx-[18px] md:px-[30px]">
                      Get Involved
                      <div className="w-[8px] md:w-[12px] ml-[10px] ">
                        <FaArrowRightLong className="text-[16px]" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
