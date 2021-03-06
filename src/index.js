// imports
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const {
  managerQuestions,
  newEmployeeTypeQuestion,
  engineerQuestions,
  internQuestions,
} = require("./questions");
const { categorizeEmployees, generateHTML, writeToFile } = require("./utils");

const inquirer = require("inquirer");

const start = async () => {
  let inProgress = true;
  const employeeArray = [];

  // prompt Manager questions
  const { teamName, fileName, ...managerAnswers } = await inquirer.prompt(
    managerQuestions
  );

  //   create Manager instance
  const manager = new Manager(managerAnswers);

  employeeArray.push(manager);

  while (inProgress) {
    //   ask if user wants to create a new employee
    const newEmployeeTypeAnswer = await inquirer.prompt(
      newEmployeeTypeQuestion
    );

    // ask Engineer questions
    if (newEmployeeTypeAnswer.employeeType === "engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );

      // create new engineer instance
      const engineer = new Engineer({ name, id, email, github });

      // push into array
      employeeArray.push(engineer);
    }

    // ask Intern questions
    if (newEmployeeTypeAnswer.employeeType === "intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      // create new intern instance
      const intern = new Intern({ name, id, email, school });

      //   push into array
      employeeArray.push(intern);
    }

    // end application
    if (newEmployeeTypeAnswer.employeeType === "none") {
      inProgress = false;
    }
  }

  // categorize employees
  const categorizedEmployees = categorizeEmployees(employeeArray);

  //   pass employeeArray into generateHTML function
  const html = generateHTML(teamName, categorizedEmployees);

  writeToFile(`./dist/${fileName}.html`, html);

  process.exit(0);
};

start();
