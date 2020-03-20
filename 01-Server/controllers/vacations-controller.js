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

// GET http://localhost:3000/api/products/7
router.get("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const vacation = await vacationsLogic.getOneVacationAsync(_id);

        if (!vacation) {
            response.sendStatus(404);
            return;
        }

        response.json(vacation);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// PUT http://localhost:3000/api/vacations/7
router.put("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const vacation = new Vacation(request.body);
        vacation._id = _id;
        const updatedVacation = await vacationsLogic.updateVacationtAsync(vacation);

        if (updatedVacation === null) {
            response.sendStatus(404);
            return;
        }

        response.json(updatedVacation);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// PATCH http://localhost:3000/api/vacations/7
router.patch("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const vacation = new Vacation(request.body);
        vacation._id = _id;
        const updatedVacation = await vacationsLogic.updateVacationtAsync(vacation);

        if (updatedVacation === null) {
            response.sendStatus(404);
            return;
        }

        response.json(updatedVacation);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// POST http://localhost:3000/api/vacations
router.post("/", async (request, response) => {
    try {
        const vacation = new Vacation(request.body);
        const addedVacation = await vacationsLogic.addVacationAsync(vacation);
        response.status(201).json(addedVacation);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// DELETE http://localhost:3000/api/products/7
router.delete("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        await vacationsLogic.deleteVacationAsync(_id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;