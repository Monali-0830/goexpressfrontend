import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignUp = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain , setCaptain } = React.useContext(CaptainDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
        email: email,
        password: password,
        vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
      
  }

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

  if (response.status === 201) {
    const data = response.data
    setCaptain(data.captain)
    localStorage.setItem('token',data.token)
    navigate('/captain-home')
  }
    
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Captain Sign-Up</h2>
        <p className="text-center text-gray-600 mb-6">Join Goxpress as a captain and start your journey!</p>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">First Name</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} 
                placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Last Name</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} 
                placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required />
            </div>
          </div>
  
          {/* Email & Password */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required />
            </div>
          </div>
  
          {/* Vehicle Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Vehicle Color</label>
              <input type="text" value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} 
                placeholder="Color" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Plate Number</label>
              <input type="text" value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} 
                placeholder="Plate No." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required />
            </div>
          </div>
  
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Vehicle Capacity</label>
              <input type="number" 
              value={vehicleCapacity} 
              onChange={(e) => setVehicleCapacity(e.target.value)} 
              placeholder="Capacity" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Vehicle Type</label>
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required>
                <option value="">Select type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="bike">Bike</option>
              </select>
            </div>
          </div>
  
          {/* Submit Buttons */}
          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition">
            Sign Up as Captain
          </button>
  
          <button type="button" className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Continue with Google
          </button>
        </form>
  
        <p className="text-center text-gray-700 mt-4">
          Already have an account? <Link to="/captain-login" className="text-purple-600 font-semibold hover:underline">Log in here</Link>
        </p>
      </div>
    </div>
  );
} 

export default CaptainSignUp;