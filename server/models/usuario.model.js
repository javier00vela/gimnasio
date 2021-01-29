const sql = require("./db.js");

// constructor
const Usuario = function(usuario) {
  // this.nombres = usuario.nombres;
  // this.apellidos = usuario.apellidos;
  // this.identificacion = usuario.identificacion;
  // this.contrasena = usuario.contrasena;
};

Usuario.create = (usuario, result) => {
  sql.query(`INSERT INTO usuario SET  id_perfil = '${usuario.id_perfil}' , id_sede = '${usuario.id_sede}' ,nombres = '${usuario.nombres}' ,apellidos = '${usuario.apellidos}'  ,identificacion = '${usuario.identificacion}' ,contrasena = '${usuario.contrasena}'`, usuario, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created usuario: ", { id: res.insertId, ...usuario });
    result(null, { id: res.insertId, ...usuario });
  });
};



Usuario.getAuthUser = (usuario ,  result) => {
  sql.query(`SELECT id_perfil , id_sede , nombres , apellidos , identificacion FROM usuario where  identificacion = '${usuario.identificacion}' and contrasena = '${usuario.contrasena}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuario: ", res);
    result(null, res);
  });
};

Usuario.findIdentification = (usuario ,  result) => {
  sql.query(`SELECT  identificacion FROM usuario where  identificacion = '${usuario.identificacion}' and contrasena = '${usuario.contrasena}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuario: ", res);
    result(null, res);
  });
};




Usuario.findById = (usuarioId, result) => {
  sql.query(`SELECT * FROM usuario WHERE id = ${usuarioId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found usuario: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

Usuario.userBySedes = (sedeId, result) => {
  sql.query(`
  SELECT concat(usuario.nombres,' ',usuario.apellidos) as  nombres ,usuario.identificacion ,ciudad.nombre as ciudad,  sede.nombre as sede FROM usuario 
  INNER JOIN sede on sede.id = usuario.id_sede 
  INNER JOIN ciudad on ciudad.id = sede.id_ciudad  
  WHERE id_sede = ${sedeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found usuario from sede: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};



Usuario.getAll = result => {
  sql.query("SELECT * FROM usuario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuario: ", res);
    result(null, res);
  });
};

Usuario.updateById = (id, usuario, result) => {
  sql.query(
    "UPDATE usuario SET email = ?, name = ?, active = ? WHERE id = ?",
    [usuario.email, usuario.name, usuario.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Usuario with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated usuario: ", { id: id, ...usuario });
      result(null, { id: id, ...usuario });
    }
  );
};

Usuario.remove = (id, result) => {
  sql.query("DELETE FROM usuario WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Usuario with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted usuario with id: ", id);
    result(null, res);
  });
};

Usuario.removeAll = result => {
  sql.query("DELETE FROM usuario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} usuario`);
    result(null, res);
  });
};

module.exports = Usuario;
