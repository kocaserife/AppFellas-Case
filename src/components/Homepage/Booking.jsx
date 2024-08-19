import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { Button, Radio, Select } from "antd";
import { DatePicker } from "antd";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const options = [
  { label: "Round trip", value: "roundTrip" },
  { label: "One way", value: "oneWay" },
];

const Booking = ({ filters, setFilters, fetchFlights }) => {
  return (
    <div className="booking-container bg-white p-6 rounded-xl">
      <div className="booking-top flex justify-between mb-2">
        <div className="flex gap-3 items-center">
          <IoAirplaneSharp size={25} className="fill-secondary" />
          <h3 className="font-bold text-xl text-text">BOOK YOUR FLIGHT</h3>
        </div>
        <Radio.Group
          options={options}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className="booking-form mt-4 flex gap-4">
        <Select
          style={{ width: "25%" }}
          size="large"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
          placeholder={
            <div className="flex items-center gap-2">
              <FaPlaneDeparture className="fill-primary" />
            </div>
          }
        />
        <Select
          style={{ width: "25%" }}
          options={[
            { value: "jack", label: "Istanbul Airport" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
          placeholder={
            <div className="flex items-center gap-2">
              <FaPlaneArrival className="fill-primary" />
              {/*   <span>To</span> */}
            </div>
          }
          size="large"
        />
        <DatePicker
          needConfirm
          size="large"
          style={{ width: "25%" }}
          placeholder=""
          value={filters.departureDate}
          onChange={(date) => setFilters({ ...filters, departureDate: date })}
          suffixIcon={<FaCalendarAlt className="fill-primary" />}
        />
        <DatePicker
          needConfirm
          size="large"
          style={{ width: "25%" }}
          placeholder=""
          onChange={(date) => setFilters({ ...filters, landingDate: date })}
          value={filters.landingDate}
          suffixIcon={<FaCalendarAlt className="fill-primary" />}
        />
      </div>
      <Button
        className="mt-4 font-medium"
        type="primary"
        size="large"
        style={{ borderRadius: "10px" }}
        onClick={fetchFlights}
      >
        Show flights
      </Button>
    </div>
  );
};

export default Booking;
