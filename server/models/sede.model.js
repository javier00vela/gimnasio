const sql = require("./db.js");

// constructor
const Sede = function(sede) {};

Sede.create = (newSede, result) => {
  sql.query(`INSERT INTO sede SET nombre = '${newSede.nombre}' , id_ciudad = '${newSede.id_ciudad}'  `, newSede, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created sede: ", { id: res.insertId, ...newSede });
    result(null, { id: res.insertId, ...newSede });
  });
};

Sede.findById = (sedeId, result) => {
  sql.query(`SELECT * FROM sede WHERE id = ${sedeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found sede: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Sede with the id
    result({ kind: "not_found" }, null);
  });
};

Sede.getAll = result => {
  sql.query("SELECT * FROM sede", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sede: ", res);
    result(null, res);
  });
};

Sede.updateById = (id, sede, result) => {
  sql.query(
    "UPDATE sede SET email = ?, name = ?, active = ? WHERE id = ?",
    [sede.email, sede.name, sede.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Sede with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated sede: ", { id: id, ...sede });
      result(null, { id: id, ...sede });
    }
  );
};

Sede.remove = (id, result) => {
  sql.query("DELETE FROM sede WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Sede with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted sede with id: ", id);
    result(null, res);
  });
};

Sede.removeAll = result => {
  sql.query("DELETE FROM sede", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} sede`);
    result(null, res);
  });
};

module.exports = Sede;
