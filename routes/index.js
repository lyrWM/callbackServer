const express = require("express");
const { logger } = require("../utils/winston");
const router = express.Router();
const { log } = require("winston");

const user = require("./user");
const login = require("./login");

// app.use(function (req) {
//     req.rawBody = "";
//     req.setEncoding("utf8");
//     req.on("data", function (chunk) {
//         req.rawBody += chunk;
//     });
//     req.on("end", function () {
//         req.next();
//     });
// });

function callbackMiddleware(req, res, next) {
    req.rawBody = "";
    req.setEncoding("utf8");
    req.on("data", function (chunk) {
        req.rawBody += chunk;
    });
    req.on("end", function () {
        req.next();
    });
};

router.use("/user", callbackMiddleware, user);
router.use("/login", login);

router.get("/", (req, res) => {
    try {
        logger.info("hello SSL server");
        res.status(200).send({ message: "HELLO SSL SERVER! " });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
