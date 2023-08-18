const router = require("express").Router();

const User = require("../../../models/fireblocksDB/userInfo");
const APIUser = require("../../../models/fireblocksDB/apiUserInfo");

const { logger } = require("../../../utils/winston");

router.post("/signin", async (req, res) => {
    try {
        const { e_mail, password } = req.body;
        logger.info("e_mail: " + e_mail);
        logger.info("password: " + password);

        const findUser = await User.findOne({
            where: { user_id: e_mail },
            attributes: ["user_id", "password", "salt"],
        });

        if (!findUser) {
            res.status(404).send({ message: "Not Registered" });
        } else if (findUser) {
            const result = await validatePassword(password, findUser.salt);
        }

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
