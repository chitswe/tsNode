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
            },
            {
                Name: "Test1"
            },
            {
                Name: "Test2"
            },
            {
                Name: "Test3"
            },
            {
                Name: "Test4"
            },
            {
                Name: "Test5"
            },
            {
                Name: "Test6"
            },
            {
                Name: "Test7"
            },
            {
                Name: "Test8"
            },
            {
                Name: "Test9"
            },
            {
                Name: "Test10"
            },
            {
                Name: "Test11"
            },
            {
                Name: "Test12"
            },
            {
                Name: "Test13"
            },
            {
                Name: "Test14"
            },
            {
                Name: "Test15"
            }
        ]);
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete("EmployeeGroup", undefined);
    }
};
