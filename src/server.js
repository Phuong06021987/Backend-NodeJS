import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './config/conectDB';
import dotenv from 'dotenv'
dotenv.config()
// require('dotenv').config();   // giup chayj dc dong process.env


let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8060;  //Port === undefined => Port = 6060

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port);
})