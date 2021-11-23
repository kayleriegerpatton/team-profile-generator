// imports
const fs = require("fs");
// const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const validateInput = (input) => {
  if (!input) {
    return "Field is required.";
  }
  return true;
};

const categorizeEmployees = (employeeArray) =>
  employeeArray.reduce(
    (acc, each) => {
      if (each instanceof Manager) {
        acc.manager = [...acc.manager, each];
      }

      if (each instanceof Engineer) {
        acc.engineers = [...acc.engineers, each];
      }

      if (each instanceof Intern) {
        acc.interns = [...acc.interns, each];
      }

      return acc;
    },
    { manager: [], engineers: [], interns: [] }
  );

const generateHTML = () => {};

// exports
module.exports = { validateInput, categorizeEmployees, generateHTML };
