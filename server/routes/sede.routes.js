module.exports = app => {
  const sedeCtl = require("../controllers/sede.controller.js");
  app.get("/sede", sedeCtl.findAll);
  app.get("/sede/:id", sedeCtl.findOne);
  app.post("/sede", sedeCtl.create);
  app.put("/sede/:id", sedeCtl.update);
  app.delete("/sede/:id", sedeCtl.delete);
  app.delete("/sede", sedeCtl.deleteAll);
};
