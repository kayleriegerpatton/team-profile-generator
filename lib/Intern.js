const Employee = require("./Employee");

class Intern extends Employee {
  constructor({ name, id, email, school }) {
    super({ name, id, email });
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  
  getRole() {
    return "Intern";
  }

  generateCard() {
    return `<div class="card m-3" style="width: 18rem">
    <div class="card-body bg-light">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
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
            class="fa-solid fa-graduation-cap"
            style="font-size: 1.2rem"
          ></i>
          School: ${this.school}
        </li>
      </ul>
    </div>
  </div>`;
  }
}

// export
module.exports = Intern;
