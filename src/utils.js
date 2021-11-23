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

//   generate HTML from categorized employee array
const generateHTML = (teamName, fileName, { manager, engineers, interns }) => {
  // map through arrays to generate HTML cards and join
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
          <div class="card m-3" style="width: 18rem">
            <div class="card-body bg-light">
              <h5 class="card-title">Employee Name</h5>
              <h6 class="card-subtitle mb-2 text-danger">Manager</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:kayle.patton22@gmail.com"
                    >kayle.patton22@gmail.com</a
                  >
                </li>
  
                <li class="list-group-item">
                  <i class="fa-solid fa-building" style="font-size: 1.2rem"></i>
                  Office Number:
                </li>
              </ul>
            </div>
          </div>
          <div class="card m-3" style="width: 18rem">
            <div class="card-body bg-light">
              <h5 class="card-title">Employee Name</h5>
              <h6 class="card-subtitle mb-2 text-primary">Engineer</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:kayle.patton22@gmail.com"
                    >kayle.patton22@gmail.com</a
                  >
                </li>
  
                <li class="list-group-item">
                  <i
                    class="fa-brands fa-github-square"
                    style="font-size: 1.5rem"
                  ></i>
                  GitHub: <a href="github.com" target="_blank">github profile</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card m-3" style="width: 18rem">
            <div class="card-body bg-light">
              <h5 class="card-title">Employee Name</h5>
              <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:kayle.patton22@gmail.com"
                    >kayle.patton22@gmail.com</a
                  >
                </li>
  
                <li class="list-group-item">
                  <i
                    class="fa-solid fa-graduation-cap"
                    style="font-size: 1.2rem"
                  ></i>
                  School:
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <script src="./src/index.js"></script>
    </body>
  </html>
  `;
};

// exports
module.exports = { validateInput, categorizeEmployees, generateHTML };
