const db = require("../models");

// Defining methods for the db Controller
module.exports = {
getbycatagory: function(req, res) {
db.Resources
.findOne({ catagory: req.params.catagory}, req.body)
.then(dbresult => res.json(dbresult))
.catch(err => res.status(404).json(err));
},
editbycatagory: function(req, res) {
    db.Resources
    .findOneAndUpdate({ catagory: req.params.catagory }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
createbycatagory: function(req, res) {
    db.Resources
    .create({ catagory: req.params.catagory }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
deletebyid: function(req, res) {
  db.Resources
  .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
getAll: function(req, res) {
    db.Resources.find(req.query)
    .sort({rating: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body")
    console.log(req.body)
    db.Resources.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Resources.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
// }
};