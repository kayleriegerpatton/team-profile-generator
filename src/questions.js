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
    name: "fileName",
    message: "Enter new file name without an extension:",
    validate: (fileName) => {
      return (
        /(^[\w\-]+)$/.test(fileName) ||
        "Please enter a valid file name without an extension"
      );
    },
  },
  {
    type: "input",
    name: "name",
    message: "Manager name:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Manager ID number:",
    validate: (id) => {
      return /^\d+$/.test(id) || "Please enter only numbers.";
    },
  },
  {
    type: "input",
    name: "email",
    message: "Manager email address:",
    validate: (email) => {
      return (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
        "Please enter a valid email."
      );
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Manager office number:",
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
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
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
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
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
