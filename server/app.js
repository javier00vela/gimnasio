const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("./helpers/jwt");
const app = express();
var cors = require('cors')
app.get("/", (req, res) => {
  res.json({ message: "api service | gimnasio." });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(jwt());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});
require("./routes/usuario.routes.js")(app);
require("./routes/sede.routes.js")(app);
require("./routes/ciudad.routes.js")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servido se ejecuta en el puerto ${PORT}.`);
});
exports.app = app;