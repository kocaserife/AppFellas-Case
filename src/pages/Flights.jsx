import React from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import { IoIosHeartHalf } from "react-icons/io";
import { GiSurroundedEye } from "react-icons/gi";
import { GiBirdLimb } from "react-icons/gi";
import { Space, Rate, Divider } from "antd";
import "./customStyles.css";

import "antd/dist/reset.css";

const Flights = () => {
  const elements = ["Times", "Stops", "Airlines", "Amenities", "Airports"];

  return (
    <div className="relative min-h-screen  bg-white ">
      <div className="absolute top-0 left-0 w-full h-[35px] bg-blue-500"></div>
      <div className="absolute top-0 right-0 w-[35px] h-full bg-blue-500"></div>
      <div className="flex flex-wrap gap-6 p-3  text-sm items-center ml-6  bg-white">
        {elements.map((element, index) => (
          <div
            key={index}
            className="mt-8 w-20 h-8 bg-white text-text text-[12px] font-bold flex items-center justify-center rounded-md border-2 border-gray-200"
          >
            {element}
          </div>
        ))}
        <div className="text-blue-700 mt-8 font-bold">Edit Search +</div>
        <div className="mt-8 ml-40">
          <Space size={2}>
            <div className="flex items-center gap-2">
              <Space direction="vertical" size={2}>
                <Rate
                  count={3}
                  defaultValue={3}
                  allowClear={false}
                  className="black-stars small-stars"
                />
                <Rate
                  count={3}
                  defaultValue={0}
                  allowClear={false}
                  className="black-stars small-stars"
                />
              </Space>
              <Divider type="vertical" className="h-8" />
              <Space direction="vertical" size={2}>
                <Rate
                  count={3}
                  defaultValue={2}
                  allowClear={true}
                  className="black-stars small-stars"
                />
                <Rate
                  count={3}
                  defaultValue={2}
                  allowClear={true}
                  className="black-stars small-stars"
                />
              </Space>
              <Divider type="vertical" className="h-8" />
              <Space direction="vertical" size={2}>
                <Rate
                  count={3}
                  defaultValue={0}
                  allowClear={false}
                  className="black-stars small-stars"
                />
                <Rate
                  count={3}
                  defaultValue={0}
                  allowClear={false}
                  className="black-stars small-stars"
                />
              </Space>
              <Divider type="vertical" className="h-8" />
              <Space direction="vertical" size={2}>
                <Rate
                  count={3}
                  defaultValue={0}
                  allowClear={false}
                  className="black-stars small-stars"
                />
                <Rate
                  count={3}
                  defaultValue={0}
                  allowClear={false}
                  className="black-stars small-stars"
                />
              </Space>
              <Divider type="vertical" className="h-8" />
              <Space direction="vertical" size={2}>
                <Rate
                  count={3}
                  defaultValue={0}
                  allowClear={false}
                  className=" black-stars small-stars"
                />
                <Rate
                  count={3}
                  defaultValue={0}
                  allowClear={false}
                  className="black-stars small-stars"
                />
              </Space>
            </div>
          </Space>
        </div>
      </div>

      <div className=" bg-gray-200 min-h-screen pt-8 ">
        <div className="flex justify-between items-center ">
          <div className="ml-10">
            Sort by: <span className="font-bold text-text">Recommended</span>
          </div>
          <div className="mr-20  text-text text-md">Avg Fare: $225 </div>
        </div>

        <div className="w-[1220px] h-[130px] bg-white border border-gray-300 mt-4 ml-12 rounded-lg shadow-md flex items-center justify-start  ">
          <IoIosHeartHalf color="purple" fontSize={30} className="ml-12 mb-8" />
          <div className="text-lg ml-8">
            {" "}
            7:10 AM - 9.12 AM
            <div className="text-sm font-bold mt-4">Delda Air Lines</div>
            <div className="text-blue-600 text-[12px] font-bold"> Fight Details</div>
          </div>
          <div className="flex flex-col mt-8 ml-12">
            {" "}
            <div className="text-sm font-bold mt-2">Non Stop</div>
            <div className="text-gray-400 text-sm"> 1h 32m</div>
          </div>
        </div>

        <div className="w-[1220px] h-[130px] bg-white border border-gray-300 mt-4 ml-12 rounded-lg shadow-md flex items-center  ">
          <FaChevronCircleUp
            color="#800000"
            fontSize={30}
            className="ml-12 mb-8"
          />
        </div>
        <div className="w-[1220px] h-[130px] bg-white border border-gray-300 mt-4 ml-12 rounded-lg shadow-md flex items-center  ">
          <GiSurroundedEye color="blue" fontSize={30} className="ml-12 mb-8" />
        </div>
        <div className="w-[1220px] h-[130px] bg-white border border-gray-300 mt-4 ml-12 rounded-lg shadow-md flex items-center  ">
          <GiBirdLimb color="green" fontSize={30} className="ml-12 mb-8" />
        </div>
      </div>
    </div>
  );
};

export default Flights;
