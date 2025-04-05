import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {captain , setCaptain } = React.useContext(CaptainDataContext)
    const navigate = useNavigate();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }
        
        setEmail("");
        setPassword("");
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">
                    Captain Login - Goxpress
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Drive the Future, Join Goxpress Today!
                </p>

                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <label className="flex items-center text-gray-700">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <Link to="/captain-forgot-password" className="text-purple-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition"
                    >
                        Log in as Captain
                    </button>
                </form>

                <p className="text-center text-gray-700 mt-4">
                    Join a fleet ?{" "}
                    <Link to="/captain-signup" className="text-purple-600 font-semibold hover:underline">
                        Register as a Captain
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default CaptainLoginPage;
