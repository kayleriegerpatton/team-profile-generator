// imports
// const { Employee, Engineer, Manager, Intern } = require("../lib");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const { managerQuestions } = require("./questions");

const inquirer = require("inquirer");
const fs = require("fs");

// const validateNumber = (answers) => {
//   if (answers.managerId === NaN) {
//     console.log("not a number");
//     return false;
//   } else {
//     console.log("this is a number");
//     return true;
//   }
// };

const start = async () => {
  // prompt initial Manager questions
  const managerAnswers = await inquirer.prompt(managerQuestions);

  console.log(managerAnswers);
};

// run initial manager prompt questions
start();
