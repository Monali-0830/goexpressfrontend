const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistedTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const isBlacklisted = await blacklistedTokenModel.findOne({ token : token });

    if (isBlacklisted) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try{    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();

    }catch(error){
        return res.status(401).json({ message : "Unauthorized " });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    console.log("Received Token:", token);
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const isBlacklisted = await blacklistedTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ error: "Unauthorized: Token is blacklisted" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // Check if _id exists

        if (!decoded._id) {
            return res.status(401).json({ error: "Unauthorized: Invalid token payload" });
        }

        const captain = await captainModel.findById(decoded._id);
        console.log("Captain Data:", captain); // Check if captain exists

        if (!captain) {
            return res.status(401).json({ error: "Unauthorized: Captain not found" });
        }

        req.captain = captain;
        return next();
    } catch (err) {
        console.error("JWT Error:", err);
        return res.status(401).json({ error: "Unauthorized: Token verification failed" });
    }
};
module.exports.authCaptain = async (req, res, next) => {
    console.log("Middleware Reached");  // Debugging step ✅
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    console.log("Received Token:", token);  // Debugging step ✅
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const isBlacklisted = await blacklistedTokenModel.findOne({ token });
    console.log("Is Blacklisted:", isBlacklisted);  // Debugging step ✅

    if (isBlacklisted) {
        return res.status(401).json({ error: "Unauthorized: Token is blacklisted" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);  // Debugging step ✅

        if (!decoded._id) {
            return res.status(401).json({ error: "Unauthorized: Invalid token payload" });
        }

        const captain = await captainModel.findById(decoded._id);
        console.log("Captain Data:", captain);  // Debugging step ✅

        if (!captain) {
            return res.status(401).json({ error: "Unauthorized: Captain not found" });
        }

        req.captain = captain;
        return next();
    } catch (err) {
        console.error("JWT Error:", err);
        return res.status(401).json({ error: "Unauthorized: Token verification failed" });
    }
};
