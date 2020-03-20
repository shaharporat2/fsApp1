const express = require("express");
const usersLogic = require("../business-logic-layer/users-logic");
const User = require("../models/user");
const router = express.Router();

// POST http://localhost:3000/api/vacations
router.post("/", async (request, response) => {
    try {
        const user = new User(request.body);
        const addedUser = await usersLogic.addUserAsync(user);
        response.status(201).json(addedUser);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;