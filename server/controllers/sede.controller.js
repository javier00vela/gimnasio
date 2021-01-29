const Sede = require("../models/sede.model.js");

// Create and Save a new Sede
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }


  const sede = {
    nombre: req.body.nombre,
    id_ciudad: req.body.id_ciudad,
  };

  Sede.create(sede, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sede."
      });
    else res.send(data);
  });
};

// Retrieve all Sedes from the database.
exports.findAll = (req, res) => {
  Sede.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Find a single Sede with a customerId
exports.findOne = (req, res) => {
  Sede.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Sede with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Sede with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};

// Update a Sede identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  Sede.updateById(
    req.params.customerId,
    new Sede(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Sede with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Sede with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Sede with the specified customerId in the request
exports.delete = (req, res) => {
  Sede.remove(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Sede with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Sede with id " + req.params.customerId
        });
      }
    } else res.send({ message: `Sede was deleted successfully!` });
  });
};

// Delete all Sedes from the database.
exports.deleteAll = (req, res) => {
  Sede.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Sedes were deleted successfully!` });
  });
};
