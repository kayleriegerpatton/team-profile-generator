// imports
const { Employee, Engineer, Manager, Intern } = require("./lib");

const inquirer = require("inquirer");
const fs = require("fs");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter your name:",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter your ID number:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter your email address:",
  },
  {
    type: "list",
    name: "newEmployeeType",
    message: "Which type of employee do you want to enter?:",
    choices: [
      { name: "Engineer", value: "engineer" },
      { name: "Intern", value: "Intern" },
    ],
  },
];

const start = async () => {
  // prompt initial Manager questions
  const { answers } = await inquirer.prompt(managerQuestions);
};

start();
