const router = require("express").Router();

const { logger } = require("../../../utils/winston");
const { selectLoginUserInfo } = require("../../../models/query/select");
const { validatePassword } = require("../../../utils/createHash");

router.post("/signin", async (req, res) => {
    try {
        const { e_mail, password } = req.body;
        logger.info("e_mail: " + e_mail);
        logger.info("password: " + password);

        const findUser = await selectLoginUserInfo(e_mail);

        logger.info(findUser);

        const result = await validatePassword(password, findUser.salt);

        if (result === findUser.password) {
            res.status(200).send({ message: "success" });
        } else {
            res.status(400).send({ message: "failed" });
        }

    }
    catch (error) {
        logger.error(error.message);
        res.status(404).send({ message: error.message });
    }
})

module.exports = router;
