const sql = require("./db.js");

// constructor
const Ciudad = function(city) {};

Ciudad.create = (ciudad, result) => {
  sql.query(`INSERT INTO ciudad SET nombre = '${ciudad.nombre}' `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...ciudad });
  });
};

Ciudad.findById = (cityId, result) => {
  sql.query(`SELECT * FROM ciudad WHERE id = ${cityId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found city: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Ciudad with the id
    result({ kind: "not_found" }, null);
  });
};

Ciudad.getAll = result => {
  sql.query("SELECT * FROM ciudad", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("ciudad: ", res);
    result(null, res);
  });
};

Ciudad.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE ciudad SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Ciudad with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Ciudad.remove = (id, result) => {
  sql.query("DELETE FROM ciudad WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Ciudad with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

Ciudad.removeAll = result => {
  sql.query("DELETE FROM ciudad", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Ciudad;
