// imports
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const {
  managerQuestions,
  newEmployeeTypeQuestion,
  engineerQuestions,
  internQuestions,
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

  let inProgress = true;
  while (inProgress) {
    //   ask if user wants to create a new employee
    const newEmployeeTypeAnswer = await inquirer.prompt(
      newEmployeeTypeQuestion
    );

    //   returns: {employeeType: ''}
    console.log(newEmployeeTypeAnswer);
    // ask Engineer questions
    if (newEmployeeTypeAnswer.employeeType === "engineer") {
      //   console.log("ask engineer questions");
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
    }

    // ask Intern questions
    if (newEmployeeTypeAnswer.employeeType === "intern") {
      console.log("ask intern questions");
      const internAnswers = await inquirer.prompt(internQuestions);
    }

    // end application
    if (newEmployeeTypeAnswer.employeeType === "none") {
      inProgress = false;
      console.log("app ended");
      process.exit(0);
    }
  }
};

// run initial manager prompt questions
start();
