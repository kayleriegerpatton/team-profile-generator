// imports
// const { Employee, Engineer, Manager, Intern } = require("../lib");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const {
  managerQuestions,
  newEmployeeQuestion,
  employeeTypeQuestion,
} = require("./questions");

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

  //   ask if user wants to create a new employee
  const newEmployeeAnswer = await inquirer.prompt(newEmployeeQuestion);

  //   if yes, ask for employee type
  if (newEmployeeAnswer.newNoteConfirm === true) {
    const employeeTypeAnswer = await inquirer.prompt(employeeTypeQuestion);

    // if done creating new employees, end app
  } else {
    // console.log("app ended");
    process.exit(0);
  }
};

// run initial manager prompt questions
start();
