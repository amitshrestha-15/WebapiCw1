const express = require("express");
const {
  register,
  login,
  getProfile,
} = require("../controllers/user-controller");
const { isAuth } = require("../middlewares/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuth, getProfile);

module.exports = router;
