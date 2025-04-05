import React from 'react';

const LookingForDriver = ({ setVehicleFound , pickup, destination, fare, vehicleType }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-5 w-full max-w-md mx-auto">
      <button
        className="absolute top-2 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-700"
        onClick={() => setVehicleFound(false)}
      >
        <i className="text-3xl ri-arrow-down-wide-fill"></i>
      </button>
      
      <h3 className="text-2xl font-semibold text-center mt-10">Looking for a Driver</h3>
      
      <div className='flex flex-col items-center mt-5'>
        <img className="h-24" 
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" 
          alt="UberSelect" 
        />
      </div>
      
      <div className='w-full mt-5 border rounded-lg overflow-hidden'>
        <div className='flex items-center gap-4 p-4 border-b bg-gray-100'>
          <i className="text-xl text-blue-500 ri-map-pin-2-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600'>{pickup}</p>
          </div>
        </div>
        
        <div className='flex items-center gap-4 p-4 border-b'>
          <i className="text-xl text-green-500 ri-map-pin-user-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600'>{destination}</p>
          </div>
        </div>
        
        <div className='flex items-center gap-4 p-4 bg-gray-100'>
          <i className="text-xl text-yellow-500 ri-money-rupee-circle-line"></i>
          <div>
            <h3 className='text-lg font-medium'> ₹{fare[vehicleType]}</h3>
            <p className='text-sm text-gray-600'>Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;