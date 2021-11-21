// imports
// const { Employee, Engineer, Manager, Intern } = require("../lib");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

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

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter your name:",
  },
  {
    type: "number",
    name: "managerId",
    message: "Enter your ID number:",
    // validate: validateNumber(),
    // if NaN, throw error message & repeat prompt???
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter your email address:",
  },
  {
    type: "confirm",
    name: "newNoteConfirm",
    message: "Do you want to create an employee?",
    default: false,
  },
  //   {
  //     type: "list",
  //     name: "newEmployeeType",
  //     message: "Which type of employee do you want to enter?:",
  //     choices: [
  //       { name: "Engineer", value: "engineer" },
  //       { name: "Intern", value: "Intern" },
  //     ],
  //   },
];

const start = async () => {
  // prompt initial Manager questions
  const managerAnswers = await inquirer.prompt(managerQuestions);

  console.log(managerAnswers);
};

// run initial manager prompt questions
start();
