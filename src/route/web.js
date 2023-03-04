import express from "express";
// import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    return app.use("/", router);
}

module.exports = initWebRoutes;