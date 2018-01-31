import { QueryInterface, SequelizeStatic } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
      return queryInterface.bulkInsert("EmployeeGroup", [
        {
          Name: "Finance"
        },
        {
          Name: "Sale",
          CheckInTime: new Date(1990, 6, 4, 8, 30),
          CheckOutTime: new Date(1990, 6, 4, 18)
        },
        {
          Name: "Admin"
        },
        {
          Name: "Logistic"
        }
      ]);
  },
  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
      return queryInterface.bulkDelete("EmployeeGroup", undefined);
  }
};

