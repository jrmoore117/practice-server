const router = require("express").Router();
const helloController = require("../controllers/helloController");

// Matches with "/hello/"
router.route("/").get(helloController.sayHello);

router.route("/:name").get(helloController.sayHelloToX);

module.exports = router;
