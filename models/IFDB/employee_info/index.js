const Sequelize = require("sequelize");

module.exports = class EmployeeInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        emp_seq: {
          type: Sequelize.STRING(32),
          primaryKey: true,
          allowNull: false,
        },
        emp_no: { type: Sequelize.STRING(60), allowNull: true },
        emp_name: { type: Sequelize.STRING(200), allowNull: true },
        login_id: { type: Sequelize.STRING(200), allowNull: true },
        e_mail: { type: Sequelize.STRING(200), allowNull: true },
        out_mail: { type: Sequelize.STRING(200), allowNull: true },
        group_seq: { type: Sequelize.STRING(60), allowNull: true },
        biz_seq: { type: Sequelize.STRING(60), allowNull: true },
        biz_name: { type: Sequelize.STRING(200), allowNull: true },
        gw_company_cd: { type: Sequelize.STRING(32), allowNull: true },
        erp_company_cd: { type: Sequelize.STRING(60), allowNull: true },
        company_name: { type: Sequelize.STRING(200), allowNull: true },
        dept_seq: { type: Sequelize.STRING(60), allowNull: true },
        dept_cd: { type: Sequelize.STRING(60), allowNull: true },
        dept_name: { type: Sequelize.STRING(200), allowNull: true },
        main_comp_yn: { type: Sequelize.STRING(1), allowNull: true },
        main_dept_yn: { type: Sequelize.STRING(1), allowNull: true },
        duty_code: { type: Sequelize.STRING(60), allowNull: true },
        duty_name: { type: Sequelize.STRING(200), allowNull: true },
        position_code: { type: Sequelize.STRING(60), allowNull: true },
        position_name: { type: Sequelize.STRING(200), allowNull: true },
        join_date: { type: Sequelize.DATE, allowNull: true },
        group_join_date: { type: Sequelize.DATE, allowNull: true },
        resign_date: { type: Sequelize.DATE, allowNull: true },
        work_status: { type: Sequelize.STRING(10), allowNull: true },
        use_yn: { type: Sequelize.STRING(1), allowNull: true },
        check_work_yn: { type: Sequelize.STRING(1), allowNull: true },
        orgchart_display_yn: { type: Sequelize.STRING(1), allowNull: true },
        messenger_display_yn: { type: Sequelize.STRING(1), allowNull: true },
        reg_date: { type: Sequelize.DATE, allowNull: true },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "EmployeeInfo",
        tableName: "employee_info",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
