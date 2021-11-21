const managerQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Enter your team's name:",
  },
  {
    type: "input",
    name: "name",
    message: "Enter your name:",
  },
  {
    type: "number",
    name: "id",
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
    type: "number",
    name: "officeNumber",
    message: "Enter your office number:",
    // validate: validateNumber(),
    // if NaN, throw error message & repeat prompt???
  },
];

const newEmployeeTypeQuestion = [
  {
    type: "list",
    name: "employeeType",
    message: "Which type of employee do you want to create?:",
    choices: [
      { name: "Engineer", value: "engineer" },
      { name: "Intern", value: "intern" },
      { name: "None", value: "none" },
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "number",
    name: "id",
    message: "ID number:",
    // validate: validateNumber(),
    // if NaN, throw error message & repeat prompt???
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
  },
  {
    type: "input",
    name: "github",
    message: "GitHub username:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "number",
    name: "id",
    message: "ID number:",
    // validate: validateNumber(),
    // if NaN, throw error message & repeat prompt???
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
  },
  {
    type: "input",
    name: "school",
    message: "School:",
  },
];

// exports
module.exports = {
  managerQuestions,
  newEmployeeTypeQuestion,
  engineerQuestions,
  internQuestions,
};
