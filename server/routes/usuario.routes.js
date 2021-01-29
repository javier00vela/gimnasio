module.exports = app => {
  const usuarioCtl = require("../controllers/usuario.controller.js");
  app.get("/usuario", usuarioCtl.findAll);
  app.get("/usuario/sedes/:id", usuarioCtl.sedes);
  app.get("/usuario/:id", usuarioCtl.findOne);
  app.post("/usuario", usuarioCtl.create);
  app.post("/usuario/auth", usuarioCtl.auth);
  app.put("/usuario/:id", usuarioCtl.update);
  app.delete("/usuario/:id", usuarioCtl.delete);
  app.delete("/usuario", usuarioCtl.deleteAll);
};
