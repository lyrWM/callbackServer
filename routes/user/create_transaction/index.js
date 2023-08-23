const router = require("express").Router();
const { logger } = require("../../../utils/winston");
const createFireblocksSDK = require("../../../utils/getFireblocksSDK");

//role : editor 관련 라우터
router.post("/createTransaction", async (req, res) => {
    try {

        //createTransaction 화면에 보여주어야 할 데이터 :: vault list, external , internal wallet List

        //createTransaction 화면에서 받아와야 할 데이터
        const { operation, assetId, amount, src, dest, userId } = req.body;

        const payload = {
            operation: operation,
            assetId: assetId,
            amount: amount,
            source: { type: src.srcType, id: src.srcId },
            destination: { type: dest.destType, id: dest.destId },
        };
        const fireblocks = await createFireblocksSDK(userId);
        const transactions = await fireblocks.createTransaction(payload);

        res.status(200).send(transactions);
    } catch (error) {
        logger.error(error.message);
        res.status(404).send({ message: error.message });
    }
});

module.exports = router;