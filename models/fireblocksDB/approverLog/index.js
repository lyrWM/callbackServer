const Sequelize = require("sequelize");

module.exports = class ApproverLog extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        Seq: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        approveTX: { type: Sequelize.STRING(256), allowNull: false },
        approveDT: { type: Sequelize.DATE, allowNull: false },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "ApproverLog",
        tableName: "approverLog",
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
