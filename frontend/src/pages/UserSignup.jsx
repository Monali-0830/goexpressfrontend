import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignUp = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext); 


const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      fullname:{
        firstname:firstName,
        lastname : lastName
      },
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,userData);
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }

    setFirstName("")
    setLastName("")
    setEmail("");
    setPassword("");
    setConfirmPassword("")
}

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 p-4">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-900">User Sign-Up</h2>
      <p className="text-center text-gray-600 mb-6">Join Goxpress and get started today!</p>

      <form onSubmit={submitHandler} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
                <label className="block text-gray-700 font-medium">First Name</label>
                <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) =>{
                  setFirstName(e.target.value)
                }}
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) =>{
                  setLastName(e.target.value)
                }}
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) =>{
                setEmail(e.target.value)
              }}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) =>{
                setPassword(e.target.value)
              }}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) =>{
                setConfirmPassword(e.target.value)
              }}
              placeholder="Re-enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition"
          >
            Sign Up
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition"
          >
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
