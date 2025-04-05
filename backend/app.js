const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const  connectToDB = require('./db/db');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.routes');
const CaptainRoutes = require('./routes/captain.routes');
const mapRoutes =  require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');



connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRouter);
app.use('/captains', CaptainRoutes);
app.use('/maps',mapRoutes);
app.use('/rides',rideRoutes);
app.use('/auth', userRouter);


module.exports = app;