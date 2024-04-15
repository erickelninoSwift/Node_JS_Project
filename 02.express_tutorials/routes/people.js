const express = require("express");
const {
  getAllpeople,
  updateData,
  deleteUser,
} = require("../controllers/peopleController");
const router = express.Router();

router.get("/", getAllpeople);

router.put("/:id", updateData);

router.delete("/:id", deleteUser);

module.exports = { myPeopleRoute: router };
