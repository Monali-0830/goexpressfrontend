import React, { useContext } from 'react';
import { CaptainDataContext }  from '../context/CaptainContext';

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);
  console.log(" used Captain Data:", captain);

  return (
    

    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Captain Info */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <img 
            className="h-16 w-16 rounded-full object-cover border-2 border-gray-400" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdzITbVC52EY4vktN1RVKSPh23YqE5JbKVA&s" 
            alt="Driver"
          />
          <div>
            <h4 className="text-xl font-bold text-gray-900 capitalize ">
              {captain.fullname.firstname}
            </h4>
            <p className="text-sm text-gray-600">Captain ID: {captain?._id || "N/A"}</p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-3xl font-bold text-green-600">₹295.2</h4>
          <p className="text-sm text-gray-500">Today's Earnings</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <StatCard icon="ri-timer-2-line" value="10.2" label="Hours Online" />
        <StatCard icon="ri-speed-up-line" value="120" label="Km Driven" />
        <StatCard icon="ri-booklet-line" value="15" label="Trips Completed" />
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }) => (
  <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md border border-gray-200">
    <i className={`text-3xl mb-2 text-blue-500 ${icon}`}></i>
    <h5 className="text-xl font-semibold text-gray-800">{value}</h5>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export default CaptainDetails;
