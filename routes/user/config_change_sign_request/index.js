const router = require("express").Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { logger } = require("../../../utils/winston");

// const privateKey = fs.readFileSync(path.resolve(__dirname, "../../../keys/private.pem"));
// const cosignerPubKey = fs.readFileSync(path.resolve(__dirname, "../../../keys/public.pem"));

router.post("/:id/v2/config_change_sign_request", async (req, res) => {
    logger.info("id : " + req.params.id);

    let verified;
    try {
        const tx = jwt.decode(req.rawBody);
        logger.info("tx decode Data : " + tx);
        const { requestId } = tx;
        verified = jwt.verify(req.rawBody, cosignerPubKey);
        if (verified) {
            let action = "APPROVE";
            let rejectionReason = "Login returned false";
            const signedRes = jwt.sign(
                {
                    action,
                    requestId,
                    rejectionReason,
                },
                privateKey,
                { algorithm: "RS256" }
            );
            logger.info("Success >> " + req.params.id);
            res.send(signedRes);
        }
    } catch (e) {
        logger.error(e);
        res.sendStatus(401);
    }
});

module.exports = router;
