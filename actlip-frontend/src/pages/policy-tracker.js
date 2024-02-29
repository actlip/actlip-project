import React, { useState } from "react";
import down2 from "../assets/down2.png";

const PolicyTracker = () => {
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const Dropdown = [
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      type: "LEGISLATION",
      government: "UNITED STAES",
      status: "ELIGIBLE FOR SENATE FLOOR CONSIDERATION",
      lastUpdated: "FEB 15, 2014",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
  ];
  return (
    <div>
      <div className="bg-sky-200 py-[32px] md:py-[80px] px-[3%] lg:px-[5%] xl:px-[10%]">
        <div>
          <h1 className="flex justify-center text-center text-[28px] lg:text-[35px] font-[700]">
            POLICY TRACKER
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[14px]  text-center text-gray-900 leading-[25px]">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] px-[3%] lg:px-[5%] xl:px-[10%]">
        <div>
          <h1 className="flex justify-start text-center text-[25px] lg:text-[32px] font-[700]">
            POLICY TRACKER
          </h1>
        </div>
        <div className=" mb-[20px]">
          {Dropdown.map((drop, i) => (
            <div
              key={i}
              className="border-b-[2px] border-gray-300  rounded-[5px] mt-[24px] mb-[20px] "
            >
              <div
                onClick={handleClick(i)}
                className="py-[28px] px-[3%] flex justify-between items-center bg-sky-100 rounded-[5px]"
              >
                <h4 className="text-[18px]  cursor-pointer font-[600] ">
                  {drop.title}
                </h4>
                <div
                  onClick={handleClick(i)}
                  className={`text-sm duration-300 cursor-pointer ${
                    clickedIndex[i] ? "rotate-180" : "rotate-0"
                  } `}
                >
                  <img
                    className="w-[15px]"
                    onClick={handleClick(i)}
                    src={down2}
                  />
                </div>
              </div>
              {clickedIndex[i] ? (
                <div>
                  <div className="grid grid-cols-2 gap-[10px] py-[20px] mx-[5%]  border-b-[1px] border-gray-400">
                    <h4 className="font-[600] text-[18px]">Type</h4>
                    <h4 className="text-[10px] md:text-[14px] lg:text-[14px] leading-[20px] font-[500]">
                      {drop.type}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-[10px] py-[20px] mx-[5%]  border-b-[1px] border-gray-400">
                    <h4 className="font-[600] text-[18px]">GOVERNMENT</h4>
                    <h4 className="text-[10px] md:text-[14px] lg:text-[14px] leading-[20px] font-[500]">
                      {drop.government}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-[10px] py-[20px] mx-[5%]  border-b-[1px] border-gray-400">
                    <h4 className="font-[600] text-[18px]">STATUS</h4>
                    <h4 className="text-[10px] md:text-[14px] lg:text-[14px] leading-[20px] font-[500]">
                      {drop.status}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-[10px] py-[20px] mx-[5%]  border-b-[1px] border-gray-400">
                    <h4 className="font-[600] text-[18px]">LAST UPDATED</h4>
                    <h4 className="text-[10px] md:text-[14px] lg:text-[14px] leading-[20px] font-[500]">
                      {drop.lastUpdated}
                    </h4>
                  </div>
                  <div className=" py-[20px] mx-[5%] font-light ">
                    <h4 className="text-[10px] md:text-[14px] lg:text-[14px] leading-[20px]">
                      {drop.content}
                    </h4>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolicyTracker;
