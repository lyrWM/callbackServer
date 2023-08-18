const router = require("express").Router();

const txSignRequest = require("./tx_sign_request");
const configChangeSignRequest = require("./config_change_sign_request");

router.use("/", txSignRequest);
router.use("/", configChangeSignRequest);

module.exports = router;