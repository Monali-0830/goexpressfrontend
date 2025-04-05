const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddle = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min :3}).withMessage('First name should be at least 3 characters long'),
    body('password').isLength({min:5}).withMessage('Password should be at least 5 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color should be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate should be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min:1 }).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Invalid Vehicle Type'),
],captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage('Password should be at least 5 characters long')
],captainController.loginCaptain);

router.get('/profile',authMiddle.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddle.authCaptain,captainController.logoutCaptain);
router.get('/', captainController.getAllCaptains);


module.exports = router;