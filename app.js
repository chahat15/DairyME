const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
dotenv.config();

//import routes
const userRoutes = require('./routes/user');

// DB
mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true ,useUnifiedTopology: true}
    ).then(() => console.log("Db connected!!"));


//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator())


//routes middleware
app.use("/api",userRoutes);

const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});