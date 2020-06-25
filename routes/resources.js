const router = require("express").Router();
const resourceController = require("../controllers/resourcesController");
// const jwt = require("jsonwebtoken");
// const jwtVerify = require("../../config/jwt");
const auth = require('../middleware/auth');

router.route("/all").get(resourceController.getAll);
router.route("/", auth).post(resourceController.create)
router.route("/update/:id", auth).put(resourceController.update)
router.route("/catagory/:catagory").get(resourceController.getbycatagory);
router.route("/catagory/:catagory").put(resourceController.editbycatagory);
router.route("/catagory/:catagory").post(resourceController.createbycatagory);
router.route("/:id", auth).delete(resourceController.deletebyid);


module.exports = router;