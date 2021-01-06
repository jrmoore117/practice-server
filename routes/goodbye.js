const router = require("express").Router();
const goodbyeController = require("../controllers/goodbyeController");

// Matches with "/goodbye/"
router.route("/").get(goodbyeController.sayGoodbye);

router.route("/:name").get(goodbyeController.sayGoodbyeToX);

module.exports = router;
