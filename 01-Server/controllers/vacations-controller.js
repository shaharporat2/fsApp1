const express = require("express");
const vacationsLogic = require("../business-logic-layer/vacations-logic");
const Vacation = require("../models/vacation");
const router = express.Router();

// GET http://localhost:3000/api/vacations
router.get("/", async (request, response) => {
    try {
        const vacations = await vacationsLogic.getAllVacationsAsync();
        response.json(vacations);
    }
    catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
});

module.exports = router;