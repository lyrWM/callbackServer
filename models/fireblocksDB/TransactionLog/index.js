const Sequelize = require("sequelize");

module.exports = class TransactionLog extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        Seq: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        Command: { type: Sequelize.STRING(100), allowNull: false },
        toAddr: { type: Sequelize.STRING(50), allowNull: false },
        fromAddr: { type: Sequelize.STRING(50), allowNull: false },
        userId: { type: Sequelize.STRING(100), allowNull: false },
        CallData: { type: Sequelize.STRING(256), allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "TransactionLog",
        tableName: "transactionLog",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    //테이블 관계 설정값 넣어주기~~
  }
};
