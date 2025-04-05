import { PropTween } from 'gsap/gsap-core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ConfirmRidePopUp = ({ setRidePopUpPanel, setConfirmRidePopUpPanel }) => {

    const [ otp, setOtp ] = useState('')

    const submitHandler=(e) =>{
        e.preventDefault()
    }
return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl w-[420px] mx-auto relative flex flex-col items-center">
      {/* Close Button */}
    <button
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-700 hover:text-gray-900"
        onClick={() => setRidePopUpPanel(false)}
    >
        <i className="text-2xl ri-arrow-down-wide-fill"></i>
    </button>

      {/* Title */}
    <h3 className="text-xl font-bold text-center mt-10 mb-5 text-gray-900">
        Confirm This Ride to Start!
    </h3>

      {/* Rider Info */}
    <div className="flex items-center justify-between w-full p-4 bg-yellow-400 rounded-xl shadow-lg">
        <div className="flex items-center gap-4">
        <img
            className="h-14 w-14 rounded-full object-cover border-2 border-white"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt="Rider"
        />
        <h2 className="text-lg font-semibold text-gray-900">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold text-gray-700">2.2 Km</h5>
    </div>

      {/* Ride Details */}
    <div className="mt-5 w-full space-y-4 bg-gray-100 p-4 rounded-xl">
        {[
            { icon: "ri-map-pin-2-fill", color: "text-green-600", title: "562/11-A", subtitle: "Kankariya Talab, Ahmedabad" },
            { icon: "ri-map-pin-user-fill", color: "text-green-600", title: "562/11-A", subtitle: "Kankariya Talab, Ahmedabad" },
            { icon: "ri-money-rupee-circle-line", color: "text-purple-600", title: "₹199.8", subtitle: "Cash Payment" }
        ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-md">
            <i className={`text-xl ${item.color} ${item.icon}`}></i>
            <div>
                <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
            </div>
        ))}
        </div>

      {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6 w-full">
        <form onSubmit={(e) => submitHandler(e)} className="w-full space-y-4">
    <input
        type="text"
        value ={otp}
        onChange={(e)=>{
            setOtp(e.target.value)
        }}
        placeholder="Enter OTP"
        className="bg-gray-100 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-gray-400 outline-none"
    />

    <Link
        to="/captain-riding"
        onClick={() => {
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
            props.createRide()
        }}
        className="w-full flex justify-center bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-xl shadow-md transition duration-300 text-md"
    >
        Confirm Ride
    </Link>

    <button
        onClick={() => {
            setConfirmRidePopUpPanel(false);
            setRidePopUpPanel(false);
        }}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-xl shadow-md transition duration-300 text-md"
    >
        Cancel Ride
    </button>
</form>

    </div>
    </div>
);
};

export default ConfirmRidePopUp;