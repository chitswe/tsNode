"use strict";
exports.__esModule = true;
module.exports = {
    up: function (queryInterface, Sequelize) {
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
    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete("EmployeeGroup", undefined);
    }
};
