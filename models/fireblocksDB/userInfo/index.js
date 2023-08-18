const Sequelize = require("sequelize");

module.exports = class UserInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
          primaryKey: true,
          allowNull: false,
        },
        password: { type: Sequelize.STRING(256), allowNull: false },
        salt: { type: Sequelize.STRING(256), allowNull: false },
        userName: { type: Sequelize.STRING(50), allowNull: false },
        useYN: { type: Sequelize.STRING(5), allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "UserInfo",
        tableName: "userInfo",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
