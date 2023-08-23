const { FireblocksSDK } = require("fireblocks-sdk");
const { selectFireblocksApiUser } = require("../../models/query/select");

const baseUrl = "https://api.fireblocks.io";

const createFireblocksSDK = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const find_user = await selectFireblocksApiUser(userId);
            const fireblocks = new FireblocksSDK(
                find_user.apiSecret,
                find_user.apiKey,
                baseUrl
            );
            resolve(fireblocks);

        } catch (error) {
            return reject(error);
        }
    });
};

module.exports = createFireblocksSDK