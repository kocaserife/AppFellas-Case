import React, { useEffect, useState } from "react";
import Booking from "../components/Homepage/Booking";
import BookingResults from "../components/Homepage/BookingResults";
import { BsCarFront } from "react-icons/bs";
import { FaHotel } from "react-icons/fa6";
import { GiIsland } from "react-icons/gi";
import { getFlights } from "../services/flights";

const Homepage = () => {
  const [filters, setFilters] = useState({
    landingDate: "",
    departureDate: "",
  });

  const fetchFlights = async () => {
    const res = await getFlights();
    console.log(res);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <Booking
            filters={filters}
            setFilters={setFilters}
            fetchFlights={fetchFlights}
          />
          <BookingResults />
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-3 gap-6">
            <div className="row-span-1 relative">
              <img src="/stock-1.jpg" alt="" className="rounded-xl" />
              <span className="absolute bottom-4 left-2 font-medium text-2xl text-white">
                <BsCarFront className="fill-white" size={35} />
                CAR RENTALS
              </span>
            </div>
            <div className="row-span-1 relative">
              <img src="/stock-2.jpg" alt="" className="rounded-xl" />
              <span className="absolute bottom-4 left-2 font-medium text-2xl text-white">
                <FaHotel className="fill-white" size={35} />
                HOTELS
              </span>
            </div>
            <div className="row-span-1 relative">
              <img src="/stock-3.jpg" alt="" className="rounded-xl" />
              <span className="absolute bottom-4 left-2 font-medium text-2xl text-white">
                <GiIsland className="fill-white" size={35} />
                TRAVEL PACKAGES
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
