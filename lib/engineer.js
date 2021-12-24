const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }

  generateCard() {
    return `<div class="card m-3" style="width: 18rem">
    <div class="card-body bg-light">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-primary">${this.getRole()}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${this.email}"
            >${this.email}</a
          >
        </li>

        <li class="list-group-item">
          <i
            class="fa-brands fa-github-square"
            style="font-size: 1.5rem"
          ></i>
          GitHub: <a href="https://github.com/${this.getGithub()}" target="_blank">${this.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>`;
  }
}

// export
module.exports = Engineer;
