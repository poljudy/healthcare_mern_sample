const router = require("express").Router();
const staffController = require("../controllers/staffController");
const auth = require('../middleware/auth');

router.route("/all").get(staffController.getAll);
router.route("/", auth).post(staffController.create)
router.route("/update/:id", auth).put(staffController.update)
router.route("/:id", auth).delete(staffController.deletebyid);
router.route("/bynameall").get(staffController.bynameall);

module.exports = router;