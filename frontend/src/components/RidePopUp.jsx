import React from "react";

const RidePopUp = ({ props }) => {
return (
    <div className="p-4 bg-white shadow-xl hover:shadow-2xl rounded-2xl w-[85%] max-w-md mx-auto mt-4 relative transition-shadow duration-300">
      {/* Close Button */}
    <h5
        className="p-1 text-center w-full absolute top-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => props.setRidePopUpPanel(false)}
    >
        <i className="text-xl ri-arrow-down-wide-fill"></i>
    </h5>

      {/* Title */}
    <h3 className="text-lg font-semibold text-center mt-8 mb-4 text-gray-800">
        New Ride Available!
    </h3>

      {/* Rider Info */}
    <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
            <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt="Rider"
        />
        <h2 className="text-lg font-medium text-gray-900">{props.ride?.user.fullname.firsname + " " + props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className="text-lg font-semibold text-gray-600">2.2 Km</h5>
    </div>

      {/* Ride Details */}
    <div className="w-full">
        <div className="flex items-center gap-3 p-3 border-b">
          <i className="text-lg ri-map-pin-2-fill text-green-600"></i>
          <div>
            <h3 className="text-sm font-medium text-gray-900">562/11-A</h3>
            <p className="text-xs text-gray-500">{props.ride?.pickup}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 border-b">
          <i className="text-lg ri-map-pin-user-fill text-green-600"></i>
          <div>
            <h3 className="text-sm font-medium text-gray-900">562/11-A</h3>
            <p className="text-xs text-gray-500">{props.ride?.destination}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3">
          <i className="text-lg ri-money-rupee-circle-line text-purple-600"></i>
          <div>
            <h3 className="text-sm font-medium text-gray-900">{props.ride?.fare}</h3>
            <p className="text-xs text-gray-500">Cash Payment</p>
          </div>
        </div>
    </div>

    <div className='mt-5 w-full '>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        props.confirmRide()

                    }} className=' bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg'>Accept</button>

                    <button onClick={() => {
                        props.setRidePopupPanel(false)

                    }} className='mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg'>Ignore</button>


                </div>
            </div>
    )
}

export default RidePopUp;