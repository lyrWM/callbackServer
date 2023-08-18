const Sequelize = require("sequelize");

module.exports = class Code extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        keyNo: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        apiNM: { type: Sequelize.STRING(256), allowNull: false },
        codeNM: { type: Sequelize.STRING(256), allowNull: false },
        Note: { type: Sequelize.STRING(256), allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Code",
        tableName: "code",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
