const mapService = require('../services/map.services');
const {validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    // Check if address is provided
    if (!address) {
        return res.status(400).json({ message: "Address is required" });
    }

    try {
        // Call service and return response
        const coordinates = await mapService.getAddressCoordinate(address);
        return res.status(200).json(coordinates);
    } catch (error) {
        console.error("Error fetching coordinates:", error.message);
        return res.status(404).json({ message: "Coordinates not found" });
    }
}; 
module.exports.getDistanceTime = async(req,res,next) =>{
    try{
        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);

    }catch(error){
        console.log(err);
        res.status(500).json({message : 'Internal server error'});
    }
}

module.exports.getAutoCompleteSugesstions = async(req,res,next) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);

    }catch(err){
        console.log(err);
        res.status(500).json({message : 'Internal server error'});
    }
}