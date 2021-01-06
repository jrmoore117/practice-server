const router = require("express").Router();
const helloRoutes = require("./hello");
const goodbyeRoutes = require("./goodbye");

// Hello Routes
router.use("/hello", helloRoutes);

// Goodbye Routes
router.use("/goodbye", goodbyeRoutes);

module.exports = router;
