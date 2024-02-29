import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, ValidationError } from "@formspree/react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import contactbg from "../assets/contactbg.png";

const ContactForm = () => {
  const { auth } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);
  const [state, handleSubmit] = useForm("xayrjand");
  const refresh = () => window.location.reload(true);

  if (state.succeeded) {
    return (
      <div className="bg-sky-50 rounded-[5px] py-[10px] px-[10px] md:px-[30px]">
        <h4 className=" text-[25px] font-semibold">Thanks!</h4>
        <h4 className=" w-full  mt-[10px]  text-[16px] ">
          The form was submitted successfully.
        </h4>
        <button
          onClick={refresh}
          className=" text-red-400  mt-[10px]  text-[16px] "
        >
          Go back to form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:grid grid-cols-2 2xl:gap-[32px] gap-[15px]">
        <div className="mt-[24px]">
          <h4 className="mb-[6px] text-[16px] ">First name</h4>
          <input
            className=" w-full text-[12px] md:text-[16px] border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
            type="text"
            name="first_name"
            id="full-name"
            placeholder="First name"
            Required
          />
        </div>
        <div className="mt-[24px]">
          <h4 className="mb-[6px] text-[16px] ">Second name</h4>
          <input
            className=" w-full text-[12px] md:text-[16px] border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
            type="text"
            name="second_name"
            id="full-name"
            placeholder="Second name"
            Required
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <h4 className="mb-[6px] text-[16px] ">Email</h4>
        <input
          className=" w-full  text-[12px] md:text-[16px] border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
          id="email"
          type="email"
          name="email"
          placeholder="example@abc.com"
          Required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mt-[24px]">
        <h4 className="mb-[6px] text-[16px] ">Phone number</h4>
        <input
          className=" w-full text-[12px] md:text-[16px] border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
          type="telephone"
          name="telephone"
          id="telephone"
          placeholder="Enter phone number"
          Required
        />
      </div>
      <div className="mt-[24px]">
        <h4 className="mb-[6px] text-[16px] ">Message</h4>
        <textarea
          className=" w-full text-[12px] md:text-[16px] border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
          rows="5"
          id="message"
          name="message"
          Required
        />
      </div>
      <div className="flex items-center mt-[24px]">
        <input
          className="w-[15px] h-[15px] cursor-pointer rounded"
          name="button"
          type="checkbox"
          placeholder=""
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <h4 className="text-[14px] ml-[8px] text-gray-600 ">
          You agree to our friendly{" "}
          <Link
            to="/privacu-policy"
            className="border-b-[2px] border-gray-400 "
          >
            privacy policy
          </Link>
          .
        </h4>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-[32px] flex justify-center w-full text-white bg-primary1 hover:bg-sky-900 lg:text-[16px] text-[14px] py-[12px] rounded-[8px]"
      >
        Send message
      </button>
    </form>
  );
};
const ContactUs = () => {
  const form = useRef();

  const [response, setResponse] = useState(false);

  return (
    <div>
      <div className="bg-sky-50 py-[32px] md:py-[80px] px-[3%] lg:px-[5%] xl:px-[10%]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            Support
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[350px] text-gray-600 ">
              Talk to a member of the ACTLIP team
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] px-[3%] lg:px-[5%] xl:px-[10%]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            We’d love to hear from you
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[600px] text-gray-600 ">
              Connect with us through our provided email address, phone number,
              and physical address, or use the convenient contact form for
              inquiries and feedback.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] px-[3%] lg:px-[5%] xl:px-[10%] md:grid md:grid-cols-3">
        <div className="py-[40px] md:py-[0px]  border-b-[1px] xl:border-r-[1px] sm:border-b-[0px] border-gray-300">
          <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-sky-200 mx-auto">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-sky-300">
              <MdOutlineMail className="text-[25px] text-primary" />
            </div>
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Email
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-400 text-center">
            Our friendly team is here to help.
          </h4>
          <h4 className="flex justify-center text-[15px]  text-primary text-center">
            <h4 className="mb-[16px] mt-[10px] text-[12px] md:text-[16px] lg:text-[16px] font-normal">
              info@actlip.org
            </h4>
          </h4>
        </div>

        <div className="py-[40px] md:py-[0px]  border-b-[1px] xl:border-r-[1px] sm:border-b-[0px] border-gray-300">
          <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-sky-200 mx-auto">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-sky-300">
              <IoLocationOutline className="text-[25px] text-primary" />
            </div>
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Office
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-400 text-center">
            Come say hello at our office HQ.
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-primary text-center">
            230 quasi architectot, Abuja
          </h4>
        </div>

        <div className="py-[40px] md:py-[0px]  ">
          <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-sky-200 mx-auto">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-sky-300">
              <FiPhone className="text-[25px] text-primary" />
            </div>
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Phone
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-400 text-center">
            Mon-Fri from 9am to 5pm.
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-primary text-center">
            + (234)123 456 7899
          </h4>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] px-[3%] lg:px-[5%] xl:px-[10%] lg:grid lg:grid-cols-2 items-center">
        <div className="lg:px-[80px] lg:py-[40px]">
          <div className="mb-[24px]">
            <h1 className="  text-[25px] lg:text-[32px] font-semibold">
              Get in touch
            </h1>
            <div className="">
              <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  lg:w-[600px] text-gray-500 ">
                Our friendly team would love to hear from you.
              </h4>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="hidden lg:flex">
          <img src={contactbg} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
