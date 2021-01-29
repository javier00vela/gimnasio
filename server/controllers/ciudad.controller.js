const Ciudad = require("../models/ciudad.model.js");

exports.create = (req, res) => {
   const ciudad = {
    nombre: req.body.nombre,
  };
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  Ciudad.create(ciudad, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ciudad."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Ciudad.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ciudads."
      });
    else res.send(data);
  });
};

// Find a single Ciudad with a ciudadId
exports.findOne = (req, res) => {
  Ciudad.findById(req.params.ciudadId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Ciudad with id ${req.params.ciudadId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Ciudad with id " + req.params.ciudadId
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  Ciudad.updateById(
    req.params.ciudadId,
    new Ciudad(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ciudad with id ${req.params.ciudadId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Ciudad with id " + req.params.ciudadId
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Ciudad.remove(req.params.ciudadId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Ciudad with id ${req.params.ciudadId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Ciudad with id " + req.params.ciudadId
        });
      }
    } else res.send({ message: `Ciudad was deleted successfully!` });
  });
};

exports.deleteAll = (req, res) => {
  Ciudad.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ciudads."
      });
    else res.send({ message: `All Ciudads were deleted successfully!` });
  });
};
