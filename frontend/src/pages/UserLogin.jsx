import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData,setuserData] = useState({});

    const { user ,setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {  
        e.preventDefault();
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
                email,
                password
            });
    
            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
                localStorage.setItem('token',data.token);
                navigate("/home");
            }
    
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            alert("Login failed! Please check your credentials.");
        }
    
        setEmail("");
        setPassword("");
    };
    


return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
            Log in to Goxpress
        </h2>
        <p className="text-center text-gray-600 mb-6">
            Wherever You Go, We’re Ready – Sign in to Ride!
        </p>

        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
                type="email"
                required
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Updates state
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
                type="password"
                required
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Updates state
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
        <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-purple-600 hover:underline">
                Forgot password?
            </Link>
        </div>
        <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition"
        >
            Log in
        </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
            New to Goxpress?{" "}
        <Link to="/signup" className="text-purple-600 font-semibold hover:underline">
            Create an account now
        </Link>
        </p>

    </div>
    </div>
    );
};

export default LoginPage;
