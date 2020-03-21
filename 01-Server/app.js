const express = require("express");
const cors = require("cors");
const vacationsController = require("./controllers/vacations-controller");
const usersController = require("./controllers/users-controller");
const morgan = require('morgan');
const bodyParser = require('body-parser');

const server = express();

require('dotenv').config();
 
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use("/api/vacations", vacationsController);
server.use("/api/users", usersController);

const port = process.env.PORT;

server.listen(port, () => console.log(`Listening on http://localhost: ${port}`));

  