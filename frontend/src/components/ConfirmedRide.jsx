import React from "react";

const ConfirmedRide = ({ setConfirmRidePanel, setVehicleFound, setVehiclePanel, pickup, destination, fare, vehicleType }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-2xl w-[85%] max-w-md mx-auto mt-4 relative">
      {/* Close button */}
      <button
        className="absolute top-2 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-700"
        onClick={() => setConfirmRidePanel(false)}
      >
        <i className="text-xl ri-arrow-down-wide-fill"></i>
      </button>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center mt-6 mb-4">
        Confirm Your Ride
      </h3>

      {/* Car Image with Smooth Floating Animation */}
      <div className="flex justify-center items-center mb-4">
        <img
          className="h-16 animate-[floating_2.5s_infinite_ease-in-out]"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="Car"
        />
      </div>

      {/* Ride Details */}
      <div className="w-full">
        <div className="flex items-center gap-3 p-3 border-b">
          <i className="text-lg ri-map-pin-2-fill text-green-600"></i>
          <div>
            <h3 className="text-sm font-medium">562/11-A</h3>
            <p className="text-xs text-gray-500">{pickup}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 border-b">
          <i className="text-lg ri-map-pin-user-fill text-blue-600"></i>
          <div>
            <h3 className="text-sm font-medium">562/11-A</h3>
            <p className="text-xs text-gray-500">{destination}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3">
          <i className="text-lg ri-money-rupee-circle-line text-yellow-600"></i>
          <div>
            <h3 className="text-sm font-medium"> ₹{fare[vehicleType]}</h3>
            <p className="text-xs text-gray-500">Cash Payment</p>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => {
          setVehicleFound(true);
          setConfirmRidePanel(false);
          setVehiclePanel(false);
        }}
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-xl shadow-md transition duration-300 text-sm"
      >
        Confirm Ride
      </button>
    </div>
  );
};

export default ConfirmedRide;
