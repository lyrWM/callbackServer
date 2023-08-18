const Sequelize = require("sequelize");

module.exports = class CalbackLog extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        Seq: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        userId: { type: Sequelize.STRING(100), allowNull: false },
        ApproveData: { type: Sequelize.STRING(200), allowNull: false },
        regDT: { type: Sequelize.DATE, allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "CallbackLog",
        tableName: "CallbackLog",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
