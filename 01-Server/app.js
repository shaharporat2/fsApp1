const express = require("express");
const cors = require("cors");
const vacationsController = require("./controllers/vacations-controller");
const usersController = require("./controllers/users-controller");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/vacations", vacationsController);
server.use("/api/users", usersController);


server.listen(3000, () => console.log("Listening on http://localhost:3000"));

