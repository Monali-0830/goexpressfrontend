import React from "react";
import { Link } from "react-router-dom";
import rideImage from "../assets/carride.jpg";
import logo from "../assets/logo.png"; 

const GoxpressRidePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-100">
      <nav className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Goxpress Logo" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#" className="hover:underline">Ride</a>
          <a href="#" className="hover:underline">Drive</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">About</a>
        </div>
        <div className="space-x-3 flex">
          <Link to='/captain-login' className="bg-purple-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-purple-400 transition">
            Captain
          </Link>
          <Link to='/login' className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-purple-600 transition">
            Log in
          </Link>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto mt-12 p-8 space-y-10 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Book your ride instantly with Goxpress
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Choose your ride and get moving with ease.
          </p>
          <div className="mt-6 flex space-x-4 justify-center lg:justify-start">
            <Link  
            to={"/home"}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition">
              See Prices
            </Link>
            <Link
            to={"/login"}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
              Schedule Ride
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={rideImage}
            alt="Ride Illustration"
            className="w-[500px] max-w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GoxpressRidePage;
