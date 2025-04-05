const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://ayushbhatt11001100:bhatt123@chatty.ebyztps.mongodb.net/UBERCLONE";

function connectToDB() {
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
        .then(() => console.log("✅ Connected to MongoDB successfully!"))
        .catch((err) => console.error("❌ MongoDB connection error:", err));
}    

module.exports = mongoose;
module.exports = connectToDB;