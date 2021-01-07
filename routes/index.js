const router = require("express").Router();
const helloRoutes = require("./hello");
const goodbyeRoutes = require("./goodbye");

// Root Route
router.use("/", function(req, res) {
    res.json({ "message": "Welcome." });
});

// Hello Routes
router.use("/hello", helloRoutes);

// Goodbye Routes
router.use("/goodbye", goodbyeRoutes);

module.exports = router;
