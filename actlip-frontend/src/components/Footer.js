import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logo-t1.png";
import LoadIcon from "../assets/loading.gif";
import { Link } from "react-router-dom";
import jsonp from "jsonp";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url =
      "https://gmail.us10.list-manage.com/subscribe/post?u=ffc5bdf96fb847004948ba72b&amp;id=81425676aa&amp;f_id=0008d9e5f0";
    let timeoutOccured = false;
    const timeoutDuration = 5000;
    const timeoutId = setTimeout(() => {
      timeoutOccured = true;
      setLoading(false);
      setSubscriptionStatus("Subscribed successfully!");
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 5000);
    }, timeoutDuration);

    jsonp(
      `${url}&EMAIL=${email}`,
      { param: "c", timeout: timeoutDuration },
      (err, data) => {
        clearTimeout(timeoutId);
        if (!timeoutOccured) {
          if (err) {
            console.error("Error:", err);
            setLoading(false);
            setSubscriptionStatus("Failed to subscribe. Please try again.");
          } else {
            console.log("Data:", data);
            setLoading(false);
            if (data && data.result === "success") {
              setSubscriptionStatus("Subscribed successfully!");
              setTimeout(() => {
                setSubscriptionStatus(null);
              }, 5000);
            } else if (data && data.msg) {
              setSubscriptionStatus(data.msg);
            } else {
              setSubscriptionStatus("Failed to subscribe. Please try again.");
            }
          }
        }
      }
    );
  };

  return (
    <div className="pb-[20px] pt-[20px] lg:py-[30px] px-[3%] lg:px-[5%] xl:px-[10%] bg-primary1">
      <div className="mt-[20px] lg:mt-[0px] w-full lg:w-[50%]">
        <h4 className="text-[12px] md:text-[16px] text-white mb-[10px]">
          Subscribe to Newsletter
        </h4>
        {loading && (
          <div className="z-40 h-[50px] flex justify-center items-center">
            <img className="w-[30px]" src={LoadIcon} alt="loading" />
          </div>
        )}
        <form onSubmit={onSubmit} className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-white py-[12px] px-[16px] h-[60px] rounded-l-[8px] w-[70%] text-[12px] md:text-[16px]"
          />
          <button
            type="submit"
            className="hover:bg-sky-400 h-[60px] bg-[#6EAEF4] text-white rounded-r-[8px] w-[30%] flex justify-center items-center"
          >
            <FaArrowRightLong className="text-[30px]" />
          </button>
        </form>
        {subscriptionStatus && (
          <div className="text-white mt-2">{subscriptionStatus}</div>
        )}
      </div>
      <div className="flex justify-between mt-[20px]">
        <div className="w-[100px] md:w-[120px] lg:hidden block">
          <img src={logo} />
        </div>

        <div className="flex gap-[30px] mt-[10px]">
          <div>
            <FaInstagram className="text-white text-[25px]" />
          </div>
          <div>
            <FaLinkedin className="text-white text-[25px]" />
          </div>
          <div>
            <FaFacebookF className="text-white text-[25px]" />
          </div>
          <div>
            <FaXTwitter className="text-white text-[25px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-[10px]">
        <div className="hidden lg:flex">
          <div className="w-[100px] md:w-[120px] hidden lg:block">
            <img src={logo} />
          </div>
        </div>
        <div className="mt-[20px] lg:mt-[0px]">
          <Link to="/">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white">
              Home
            </h3>
          </Link>
          <Link to="/about-us">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              About Us
            </h3>
          </Link>
          <Link to="/projects">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              Projects
            </h3>
          </Link>
        </div>
        <div className="mt-[20px] lg:mt-[0px]">
          <Link to="/news-and-articles">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white">
              News and Articles
            </h3>
          </Link>
          <Link to="/contact-us">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              Contact Us
            </h3>
          </Link>

          <Link to="/privacy">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              Privacy Policy
            </h3>
          </Link>
        </div>
        <div className="mt-[30px] lg:mt-[0px]">
          <h3 className="font-[500] text-[12px] md:text-[16px] text-white">
            For more info contact us
          </h3>
          <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[5px] border-b-[2px] border-white w-fit">
            info@actlip.org
          </h3>
        </div>
      </div>
      <div className="lg:flex items-end justify-between mt-[40px]">
        <div className="mt-[20px] lg:mt-[0px]">
          <h4 className="font-[500] text-[12px] md:text-[16px] text-white">
            © 2024 actlip. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
