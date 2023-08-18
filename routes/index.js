const express = require("express");
const { logger } = require("../utils/winston");
const router = express.Router();
const { log } = require("winston");

const user = require("./user")
const login = require("./login")

router.use("/user", user);
router.use("/login", login);

router.get("/", (req, res) => {
    try {
        logger.info("hello SSL server");
        res.status(200).send({ message: "HELLO SSL SERVER! " });
    } catch (error) {
        res.status(500).semd({ message: error.message });
    }
});

module.exports = router;
