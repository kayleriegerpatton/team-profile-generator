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

const start = async () => {
  // prompt initial Manager questions
  const managerAnswers = await inquirer.prompt(managerQuestions);

  let inProgress = true;
  while (inProgress) {
    //   ask if user wants to create a new employee
    const newEmployeeTypeAnswer = await inquirer.prompt(
      newEmployeeTypeQuestion
    );

    const employeeArray = [];

    // ask Engineer questions
    if (newEmployeeTypeAnswer.employeeType === "engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );

      // create new engineer instance
      const engineer = new Engineer({ name, id, email, github });
      //   console.log(engineer);

      // push into array
      employeeArray.push(engineer);
      console.log(employeeArray);
    }

    // ask Intern questions
    if (newEmployeeTypeAnswer.employeeType === "intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      // create new intern instance
      const intern = new Intern({ name, id, email, school });
    }

    // end application
    if (newEmployeeTypeAnswer.employeeType === "none") {
      inProgress = false;
      //   console.log("app ended");
      process.exit(0);
    }
  }
};

start();
