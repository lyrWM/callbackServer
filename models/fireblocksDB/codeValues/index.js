const Sequelize = require("sequelize");

module.exports = class CodeValues extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        keyNo: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        codeValues: { type: Sequelize.STRING(256), allowNull: false },
        regDT: { type: Sequelize.DATE, allowNull: false },
        updateDT: { type: Sequelize.DATE, allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "CodeValues",
        tableName: "codeValues",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
