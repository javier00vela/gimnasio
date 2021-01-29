const Usuario = require("../models/usuario.model.js");
const env = require("../config/env.js");
const jwtdata = require('jsonwebtoken');
// Create and Save a new Usuario
exports.create = (req, res, next) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Usuario
  const usuarioVo = {
    id_perfil: req.body.id_perfil,
    id_sede: req.body.id_sede,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    identificacion: req.body.identificacion,
    contrasena: new Buffer(req.body.contrasena).toString("base64"),
    nombres: req.body.nombres,
  };

  Usuario.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    }

    if (data.length >= 300) {
      res.status(403).send({
        message: "User limit founded!."
      });
    } else {
      Usuario.findIdentification(usuarioVo, (err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        }

        if (data.length > 0) {
          res.status(403).send({
            message: "User already exist!."
          });
        } else {
          Usuario.create(usuarioVo, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Usuario."
              });
            else res.send(data);
          });
        }
      });
    }
  });

};

exports.findAll = (req, res) => {
  Usuario.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

exports.auth = (req, res) => {
  const usuarioVo = {
    identificacion: req.body.identificacion,
    contrasena: new Buffer(req.body.contrasena).toString("base64"),
  }
  Usuario.getAuthUser(usuarioVo, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving customers."
      });
    }

    if (data.length == 0) {
      res.status(404).send({
        message: "User not founded."
      });
      return;
    }

    if (data) {
      const user = data;
      const sign = jwtdata.sign({ sub: user.id }, `${env.key}`, { expiresIn: '1d' });
      res.send({ userData: user, token: sign, expiresIn: '1d' });
    }

  });
};

exports.sedes = (req, res) => {
  Usuario.userBySedes(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Usuario with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Usuario.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Usuario with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};

// Update a Usuario identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Usuario.updateById(
    req.params.customerId,
    new Usuario(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Usuario with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Usuario with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Usuario.remove(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Usuario with id " + req.params.customerId
        });
      }
    } else res.send({ message: `Usuario was deleted successfully!` });
  });
};

exports.deleteAll = (req, res) => {
  Usuario.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Usuarios were deleted successfully!` });
  });
};
