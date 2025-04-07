const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOGGLE_MAPS_API; 
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        console.error("Error: Origin and Destination are required");
        return { distance: { value: 0 }, duration: { value: 0 } }; // Prevent NaN
    }

    const apiKey = process.env.GOGGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log("Google API Response:", response.data); // Debugging

        if (response.data.status === "OK" && response.data.rows[0].elements[0].status === "OK") {
            return {
                distance: response.data.rows[0].elements[0].distance,
                duration: response.data.rows[0].elements[0].duration,
            };
        } else {
            console.error("Error: Unable to fetch distance and time");
            return { distance: { value: 0 }, duration: { value: 0 } }; // Prevent NaN
        }
    } catch (error) {
        console.error("API Request Failed:", error.message);
        return { distance: { value: 0 }, duration: { value: 0 } }; // Prevent NaN
    }
};


module.exports.getAutoCompleteSuggestions = async(input) =>{
    if(!input){
        throw new Error('Query is Required');
    }

    const apiKey = process.env.GOGGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&types=geocode&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch auto complete suggestions');
        }
    } catch(error) {
        console.error( error);
        throw error;
    }
}

module.exports.getCaptainsInTheRadius = async (ltd,lng,radius) => {

    // radius in km 

    const captain = await captainModel.find({
        location:{
            $geoWithin:{
                $centerSphere: [ [lng, ltd], radius/6371]            
        }

    }
});
return captain;
}
