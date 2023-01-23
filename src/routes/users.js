const express = require("express");
const UserController = require("../controller/users");
const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/", UserController.createNewUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
