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
  //   {
  //     type: "confirm",
  //     name: "newNoteConfirm",
  //     message: "Do you want to create an employee?",
  //     default: false,
  //   },
];

const newEmployeeQuestion = [
  {
    type: "confirm",
    name: "newNoteConfirm",
    message: "Do you want to create an employee?",
    default: false,
  },
];

const employeeTypeQuestion = [
  {
    type: "list",
    name: "employeeType",
    message: "Which type of employee do you want to enter?:",
    choices: [
      { name: "Engineer", value: "engineer" },
      { name: "Intern", value: "Intern" },
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter your name:",
  },
  {
    type: "number",
    name: "engineerId",
    message: "Enter your ID number:",
    // validate: validateNumber(),
    // if NaN, throw error message & repeat prompt???
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter your name:",
  },
  {
    type: "number",
    name: "internId",
    message: "Enter your ID number:",
    // validate: validateNumber(),
    // if NaN, throw error message & repeat prompt???
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "school",
    message: "Enter your school name:",
  },
];

// exports
module.exports = {
  managerQuestions,
  newEmployeeQuestion,
  employeeTypeQuestion,
  engineerQuestions,
  internQuestions,
};
