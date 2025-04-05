import React from 'react';
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Home Button */}
      <Link
        to="/home"
        className="fixed right-4 top-4 h-12 w-12 bg-white flex items-center justify-center rounded-full shadow-md"
      >
        <i className="text-xl font-medium ri-home-4-line"></i>
      </Link>

      {/* Map Section */}
      <div className="h-[40vh] p-4">
        <img
          className="h-full w-full object-cover rounded-lg shadow-lg"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png"
          alt="Map"
        />
      </div>

      {/* Ride Details */}
      <div className="bg-white rounded-t-3xl shadow-lg p-6 mt-[-20px] relative">
        {/* Car & Driver Details */}
        <div className="flex items-center justify-between">
          <img
            className="h-14"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt="Uber Select"
          />
          <div className="text-right">
            <h2 className="text-lg font-semibold">Monali</h2>
            <h4 className="text-2xl font-bold">MP04 AB1234</h4>
            <p className="text-sm text-gray-500">Jaguar</p>
          </div>
        </div>

        {/* Ride Info */}
        <div className="mt-6 space-y-6">
          {/* Pickup Location */}
          <div className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg">
            <i className="ri-map-pin-user-fill text-2xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab, Ahmedabad</p>
            </div>
          </div>

          {/* Fare Details */}
          <div className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg">
            <i className="ri-money-rupee-circle-line text-2xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-medium">₹199.8</h3>
              <p className="text-sm text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full mt-6 bg-green-600 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:bg-green-700 transition duration-300">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
