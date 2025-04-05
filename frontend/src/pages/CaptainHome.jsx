import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useEffect , useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CaptainContext';


const CaptainHome = () => {

  const [ridePopUpPanel,setRidePopUpPanel] = useState(false)
  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUpPanel,setConfirmRidePopUpPanel] = useState(false)
  const confirmRidePopUpPanelRef = useRef(null)
  const [ ride , setRide ] = useState(null)

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() =>{
    socket.emit('join',{
      userId:captain._id,
      userType : 'captain'
    })

    const updateLocation = () =>{
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {

          console.log({userId:captain._id,
            location:{
            ltd:position.coords.latitude,
            lng:position.coords.longitude
            }})
          socket.emit('update-location-captain',{
            userId:captain._id,
            location:{
            ltd:position.coords.latitude,
            lng:position.coords.longitude
            }
          })
        })
      }
    }

    const locationInterval = setInterval(updateLocation,10000)
    updateLocation()
  })

  socket.on('new-ride',(data) =>{
    console.log(data)
  })


  useGSAP(function() {
    if (confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(confirmRidePopUpPanelRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[confirmRidePopUpPanel])

    useGSAP(function() {
      if (ridePopUpPanel){
        gsap.to(ridePopUpPanelRef.current,{
          transform:'translateY(0)'
        })
      }
        else{
          gsap.to(ridePopUpPanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[ridePopUpPanel])

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Logout Button */}
      <Link
        to="/captain-login"
        className="fixed right-4 top-4 h-12 w-12 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <i className="text-2xl ri-logout-box-r-line"></i>
      </Link>

      {/* Map Section */}
      <div className="h-1/2 p-4">
        <img
          className="h-full w-full object-cover shadow-lg rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png"
          alt="Map"
        />
      </div>
      
      
      <div className="bg-white rounded-t-3xl shadow-lg p-6 h-1/2 flex flex-col gap-6 border-t border-gray-200">
        <CaptainDetails />
      </div>
      <div  ref={ridePopUpPanelRef} className="fixed w-full bottom-0  bg-white p-6  rounded-t-2xl shadow-lg">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
      <div  ref={confirmRidePopUpPanelRef} className="fixed w-full bottom-0 h-screen  bg-white p-6  rounded-t-2xl shadow-lg">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
      </div>
  );
};



export default CaptainHome;
