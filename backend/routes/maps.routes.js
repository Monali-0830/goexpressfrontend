const express = require('express')
const router = express.Router();
const mapController = require('../controllers/map.controller');
const authMiddle = require('../middlewares/auth.middleware');
const { query } = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiddle.authUser,mapController.getCoordinates);

router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddle.authUser,
    mapController.getDistanceTime);

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authMiddle.authUser,
    mapController.getAutoCompleteSugesstions
)
    

module.exports = router;