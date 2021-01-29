module.exports = app => {
  const ciudadCtl = require("../controllers/ciudad.controller.js");
  app.get("/ciudad", ciudadCtl.findAll);
  app.get("/ciudad/:id", ciudadCtl.findOne);
  app.post("/ciudad", ciudadCtl.create);
  app.put("/ciudad/:id", ciudadCtl.update);
  app.delete("/ciudad/:id", ciudadCtl.delete);
  app.delete("/ciudad", ciudadCtl.deleteAll);
};
