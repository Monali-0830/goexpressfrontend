const express = require('express');
const router = express.Router();
const { body , query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddle = require('../middlewares/auth.middleware')

router.post('/create',
    authMiddle.authUser,
    body('pickup').isString().isLength({ min: 3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid Destination address'),
    body('vehicleType').isString().isIn([ 'auto' , 'car' ,'bike']).withMessage('Invalid Vehicle Type'),
    rideController.createRide

)

router.get('/get-fare',
    authMiddle.authUser,
    query('pickup').isString().isLength({ min : 3 }).withMessage('Invalid Pickup Location'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid Destination'),
    rideController.getFare
)

module.exports = router;