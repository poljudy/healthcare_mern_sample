const router = require("express").Router();
const staffController = require("../controllers/staffController");
// const jwt = require("jsonwebtoken");
// const jwtVerify = require("../../config/jwt");

router.route("/all").get(staffController.getAll);
router.route("/").post(staffController.create)
router.route("/update/:id").put(staffController.update)
router.route("/:id").delete(staffController.deletebyid);


module.exports = router;