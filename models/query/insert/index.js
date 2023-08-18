const { fireblocksDB, ifDB } = require("../../");

const insertFireblocksTxLog = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fireblocksDB.query(`
      INSERT INTO transactionLog(
        Command, toAddr, fromAddr, userId, CallData
      ) VALUES (
        '${data.command}',
        '${data.toAddr}',
        '${data.fromAddr}',
        '${data.userId}',
        '${data.callData}'
      )`);
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = { insertFireblocksTxLog };
