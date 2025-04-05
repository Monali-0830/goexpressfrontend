const { ValidationHalt } = require("express-validator/lib/base");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

    const { fullname , email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email })

    if (isUserAlreadyExist) {
        return res.status(400).json({ error: "User already exist" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ user, token });

}

module.exports.loginUser = async (req, res) => {

    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ error: erros.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ error: "Invalid Email or Password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ error: "Invalid Email or Password" });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ user, token });
}

module.exports.getUserProfile = async (req, res) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res) => {
    res.clearCookie('token');

    const token = req.cookies.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);


    await blackListTokenModel.create({ token });

    res.status(200).json({ message: "User Logged Out" });
}