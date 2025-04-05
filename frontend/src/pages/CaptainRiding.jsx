import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap  from 'gsap';

const CaptainRiding = () => {z

    const [finishRidePanel,setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function() {
        if (finishRidePanel){
        gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
        })
        }
        else{
            gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
            })
        }
        },[finishRidePanel])

        
return (
    <div className="h-screen flex flex-col bg-gray-50 relative">
      {/* Logout Button */}
    <Link
        to="/captain-login"
        className="fixed right-4 top-4 h-12 w-12 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-200 transition"
    >
        <i className="text-2xl ri-logout-box-r-line"></i>
    </Link>

      {/* Map Section */}
    <div className="h-4/5 p-4">
        <img
            className="h-full w-full object-cover shadow-lg rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png"
            alt="Map"
        />
        </div>

      {/* Ride Info & Actions */}
    <div 
    onClick={()=>{
        setFinishRidePanel(true)
        }}
        className="h-1/5 p-6 flex flex-col items-center justify-center bg-yellow-400 rounded-t-xl relative">
        {/* Expand Button */}
        <h5 className="absolute top-2 left-1/2 transform -translate-x-1/2 cursor-pointer">
            <i className="text-xl ri-arrow-down-wide-fill"></i>
        </h5>
        
        {/* Ride Distance */}
        <h4 className="text-xl font-semibold mb-2">4 KM Away</h4>
        
        {/* Complete Ride Button */}
        <button className="w-3/4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300 text-md">
            Complete Ride
        </button>
    </div>
        <div  ref={finishRidePanelRef} className="fixed w-full bottom-0 h-screen  bg-white p-6  rounded-t-2xl shadow-lg">
    <FinishRide setFinishRidePanel = {setFinishRidePanel} />
    </div>
    </div>
);
};

export default CaptainRiding;
