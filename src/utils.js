// imports
const fs = require("fs");

const validateInput = (input) => {
  if (!input) {
    return "Field is required.";
  }
  return true;
};

const categorizeEmployees = (employeeArray) =>
  employeeArray.reduce(
    (acc, each) => {
      if (each.getRole() === "Manager") {
        acc.manager = [...acc.manager, each];
      }

      if (each.getRole() === "Engineer") {
        acc.engineers = [...acc.engineers, each];
      }

      if (each.getRole() === "Intern") {
        acc.interns = [...acc.interns, each];
      }

      return acc;
    },
    { manager: [], engineers: [], interns: [] }
  );

// map through each employee type array, generate HTML cards, join
const generateCards = (employees) => {
  return `${employees.map((employees) => employees.generateCard()).join("")}`;
};

//   generate HTML from categorized employee arrays
const generateHTML = (teamName, { manager, engineers, interns }) => {
  //   console.log(engineers.length);
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="./dist/styles.css" />
        <title>${teamName} Profiles</title>
      </head>
      <body>
        <header>
          <h1
            class="text-center pt-4 pb-4"
            style="background-color: #3c008a; color: white"
          >
            ${teamName} Profiles
          </h1>
        </header>
        <main>
          <div class="d-flex flex-wrap justify-content-evenly card-container">
         ${manager.length ? generateCards(manager) : ""}
         ${engineers.length ? generateCards(engineers) : ""}
         ${interns.length ? generateCards(interns) : ""}
          </div>
        </main>
        <script src="./src/index.js"></script>
      </body>
    </html>
    `;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
    console.log("New file created.");
  } catch (error) {
    console.log(error.message);
  }
};

// exports
module.exports = {
  validateInput,
  categorizeEmployees,
  generateHTML,
  writeToFile,
};
