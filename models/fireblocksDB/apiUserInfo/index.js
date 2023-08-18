const Sequelize = require("sequelize");

module.exports = class ApiUserInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
          primaryKey: true,
          allowNull: false,
        },
        apiKey: { type: Sequelize.STRING(256), allowNull: false },
        apiSecret: { type: Sequelize.STRING(10000), allowNull: false },
        expirationDate: { type: Sequelize.DATEONLY, allowNull: false },
        role: { type: Sequelize.STRING(30), allowNull: false },
        IP: { type: Sequelize.STRING(200), allowNull: false },
        useYN: { type: Sequelize.STRING(5), allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "ApiUserInfo",
        tableName: "apiUserInfo",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
