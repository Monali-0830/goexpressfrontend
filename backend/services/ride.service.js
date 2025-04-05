const rideModel = require('../models/ride.model');
const mapService = require('./map.services');
const crypto = require('crypto')

async function getFare(pickup,destination){

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup,destination);

    const baseFare = {
        car: 50,
        auto: 30,
        bike: 20
    };

    const perkmRate = {
        car: 15,
        auto: 10,
        bike: 8
    };

    const perMinuteRate ={
        auto:2,
        car:3,
        bike:1.5
    }

    const fares = {
        auto : Math.round(baseFare.auto + ((distanceTime.distance.value/1000) * perkmRate.auto) + ((distanceTime.duration.value/60) * perMinuteRate.auto)),
        car : Math.round(baseFare.car + ((distanceTime.distance.value/1000) * perkmRate.car) + (( distanceTime.duration.value/60) * perMinuteRate.car)),
        bike : Math.round(baseFare.bike + ((distanceTime.distance.value/1000)  * perkmRate.bike) + ((distanceTime.duration.value/60) * perMinuteRate.bike))
    };

    return fares;

}

module.exports.getFare = getFare;

function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({
    user,pickup,destination,vehicleType
}) =>{
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, pickup, destination and vehicle type are required');
    }

    const fare = await getFare(pickup,destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp:getOtp(6),
        fare:fare[ vehicleType ]
    })

    return ride;
}
