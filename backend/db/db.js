const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/UBERCLONE";

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