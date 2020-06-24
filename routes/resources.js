const router = require("express").Router();
const resourceController = require("../controllers/resourcesController");
// const jwt = require("jsonwebtoken");
// const jwtVerify = require("../../config/jwt");

router.route("/all").get(resourceController.getAll);
router.route("/catagory/:catagory").get(resourceController.getbycatagory);
router.route("/catagory/:catagory").put(resourceController.editbycatagory);
router.route("/catagory/:catagory").post(resourceController.createbycatagory);
router.route("/:id").delete(resourceController.deletebyid);


module.exports = router;