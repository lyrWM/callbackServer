const { fireblocksDB, ifDB } = require("../../");

const selectFireblocksApiUser = async (user_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [result, metadata] = await fireblocksDB.query(
        `SELECT apiKey, apiSecret FROM apiUserInfo WHERE userId='${user_id}'` //왜 db에서 api_key를 왜 또 가져오지????
      );
      if (result[0] == undefined) return reject(new Error("Not Found"));

      const fb_api_user = result[0];
      if (!fb_api_user) return reject(new Error("No Data at user_id"));

      resolve(fb_api_user);
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = { selectFireblocksApiUser };
