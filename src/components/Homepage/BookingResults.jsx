import { Button, Radio, Select, Space } from "antd";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";


const BookingResults = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/flights'); // Yeni sayfaya yönlendirme
  };

  return (
    <div className="booking-results">
      <div className="grid grid-cols-4 rounded-xl gap-4">
        <div className="col-span-3 relative">
          <div className="bg-white p-6 pb-0 pr-0">
            <div className="places font-semibold mb-4">Milano - Madrid</div>
            <div className="grid grid-cols-5">
              <div className="col-span-1 ">
                <div className="flex items-center gap-2">
                  <FaPlaneDeparture />
                  Departure
                </div>
                <div className="font-bold">7:30 AM</div>
                <div>Airport: MXP</div>
              </div>
              <div className="col-span-1 flex justify-start items-center">
                <div className="h-px bg-black w-2/4"></div>
              </div>
              <div className="col-span-1 gap-2 flex flex-col items-center">
                <div className="flex items-center gap-4">
                  <div className="airline-logo w-full">
                    <img src="/alitalia.png" alt="" width={60} />
                  </div>
                </div>
                <IoAirplaneSharp size={20} className="-ml-1 fill-primary" />
                <div>2h 25m (Nonstop)</div>
              </div>
              <div className="col-span-1 flex justify-start items-center">
                <div className="h-px bg-black w-2/4"></div>
              </div>
              <div className="col-span-1 ">
                <div className="flex items-center gap-2">
                  <FaPlaneArrival />
                  Arrival
                </div>
                <div className="font-bold">9:55 AM</div>
                <div>Airport: MAD</div>
              </div>
              <div className="col-span-5 flex justify-between items-center mt-6 h-[80px]">
                <div>
                  <div className="price font-bold text-lg text-primary">
                    Price: $200
                  </div>
                  <span className="text-text">Round Trip</span>
                </div>
                <div>
                  <Button
                    type="primary"
                    className="rounded-xl rounded-tr-none rounded-bl-none h-[80px] text-lg px-14 py-6" onClick={handleClick}
                    style={{ borderTopRightRadius: "none" }}
                  >
                    Book Flight
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-max bg-light p-3 px-6 text-primary underline font-medium mb-4 cursor-pointer">
            Check the details
          </div>
          <div className="bg-white p-6 pb-0 pr-0">
            <div className="places font-semibold mb-4">Milano - Madrid</div>
            <div className="grid grid-cols-5">
              <div className="col-span-1 ">
                <div className="flex items-center gap-2">
                  <FaPlaneDeparture />
                  Departure
                </div>
                <div className="font-bold">7:30 AM</div>
                <div>Airport: MXP</div>
              </div>
              <div className="col-span-1 flex justify-start items-center">
                <div className="h-px bg-black w-2/4"></div>
              </div>
              <div className="col-span-1 gap-2 flex flex-col items-center">
                <div className="flex items-center gap-4">
                  <div className="airline-logo w-full">
                    <img src="/alitalia.png" alt="" width={60} />
                  </div>
                </div>
                <IoAirplaneSharp size={20} className="-ml-1 fill-primary" />
                <div>2h 25m (Nonstop)</div>
              </div>
              <div className="col-span-1 flex justify-start items-center">
                <div className="h-px bg-black w-2/4"></div>
              </div>
              <div className="col-span-1 ">
                <div className="flex items-center gap-2">
                  <FaPlaneArrival />
                  Arrival
                </div>
                <div className="font-bold">9:55 AM</div>
                <div>Airport: MAD</div>
              </div>
              <div className="col-span-5 flex justify-between items-center mt-6 h-[80px]">
                <div>
                  <div className="price font-bold text-lg text-primary">
                    Price: $200
                  </div>
                  <span className="text-text">Round Trip</span>
                </div>
                <div>
                  <Button
                    type="primary"
                    className="rounded-xl rounded-tr-none rounded-bl-none h-[80px] text-lg px-14 py-6" onClick={handleClick}
                  >
                    Book Flight
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-max bg-light p-3 px-6 text-primary underline font-medium mb-4 cursor-pointer">
            Check the details
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="filters flex flex-col gap-4">
            <div className="sort">
              <div className="font-bold">Sort by:</div>
              <Select
                className="w-full"
                options={[{ value: "jack", label: "Lowest price" }]}
              />
            </div>
            <div className="time">
              <div className="font-bold">Arrival Time</div>
              <Radio.Group value={"value"}>
                <Space direction="vertical">
                  <Radio value={1}>5:00 AM - 11:59 AM</Radio>
                  <Radio value={2}>12:00 PM - 5:59 PM</Radio>
                </Space>
              </Radio.Group>
            </div>
            <div className="steps">
              <div className="font-bold">Stops</div>
              <Radio.Group value={"value"}>
                <Space direction="vertical">
                  <Radio value={1}>Nonstop</Radio>
                  <Radio value={2}>1 Stop</Radio>
                  <Radio value={3}>2+ Stops</Radio>
                </Space>
              </Radio.Group>
            </div>
            <div className="airlines">
              <div className="font-bold">Airlines Included</div>
              <Radio.Group value={"value"}>
                <Space direction="vertical">
                  <Radio value={1}>Alitalia</Radio>
                  <Radio value={2}>Lufthansa</Radio>
                  <Radio value={3}>Air France</Radio>
                  <Radio value={3}>Brussels Airlines</Radio>
                  <Radio value={3}>Air Italy</Radio>
                  <Radio value={3}>Siberia</Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingResults;
