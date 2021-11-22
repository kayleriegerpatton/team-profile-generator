const { validateInput } = require("./utils");

const managerQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Enter your team's name:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "name",
    message: "Enter your name:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Enter your ID number:",
    validate: (id) => {
      return /^\d+$/.test(id) || "Please enter only numbers.";
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (email) => {
      return (
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) ||
        "Please enter a valid email."
      );
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your office number:",
    validate: (officeNumber) => {
      return /^\d+$/.test(officeNumber) || "Please enter only numbers.";
    },
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
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "ID number:",
    validate: (id) => {
      return /^\d+$/.test(id) || "Please enter only numbers.";
    },
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
    validate: (email) => {
      return (
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) ||
        "Please enter a valid email."
      );
    },
  },
  {
    type: "input",
    name: "github",
    message: "GitHub username:",
    validate: validateInput,
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Name:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "ID number:",
    validate: (id) => {
      return /^\d+$/.test(id) || "Please enter only numbers.";
    },
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
    validate: (email) => {
      return (
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) ||
        "Please enter a valid email."
      );
    },
  },
  {
    type: "input",
    name: "school",
    message: "School:",
    validate: validateInput,
  },
];

// exports
module.exports = {
  managerQuestions,
  newEmployeeTypeQuestion,
  engineerQuestions,
  internQuestions,
};
