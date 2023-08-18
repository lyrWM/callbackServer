const https = require("https");
const express = require("express");
const fs = require("fs");
const cors = require('cors')
const routes = require("./routes");
const { logger } = require("./utils/winston");
const path = require("path");

const app = express();
const port = 9595;

// logger.info(fs.readFileSync("star_wemade_com_Nopasskey.pem", "utf-8"))
// logger.info(fs.readFileSync("star_wemade_com_cert.pem", "utf-8"))
// logger.info(fs.readFileSync("Chain_RootCA_Bundle.crt", "utf-8"))

const caPath = "/Users/wm-il000516/Desktop/Wemade/callbackServer/Chain_RootCA_Bundle.crt";
const keyPath = "/Users/wm-il000516/Desktop/Wemade/callbackServer/key.pem";
const certPath = "/Users/wm-il000516/Desktop/Wemade/callbackServer/cert.pem";

const options = {
  ca: fs.readFileSync(path.resolve(caPath), "utf-8"),
  key: fs.readFileSync(path.resolve(keyPath), "utf-8"),
  cert: fs.readFileSync(path.resolve(certPath), "utf-8"),
};


app.use(cors())

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use(function (req) {
  req.rawBody = "";
  req.setEncoding("utf8");
  req.on("data", function (chunk) {
    req.rawBody += chunk;
  });
  req.on("end", function () {
    req.next();
  });
});


app.use("/", routes);

const server = https.createServer(options, app);

server.listen(port, () => {
  logger.info("HTTPS server listening on port : " + port);
});
