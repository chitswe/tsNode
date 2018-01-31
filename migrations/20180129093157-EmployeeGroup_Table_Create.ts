import { QueryInterface, SequelizeStatic } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable("EmployeeGroup", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
      Name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      CheckInTime: Sequelize.DATE,
      CheckOutTime: Sequelize.DATE
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.dropTable("EmployeeGroup");
  }
};
