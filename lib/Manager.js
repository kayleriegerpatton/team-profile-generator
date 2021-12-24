const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }

  generateCard() {
    return `<div class="card m-3" style="width: 18rem">
    <div class="card-body bg-light">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-danger">${this.getRole()}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${this.email}"
            >${this.email}</a
          >
        </li>

        <li class="list-group-item">
          <i class="fa-solid fa-building" style="font-size: 1.2rem"></i>
          Office Number: ${this.officeNumber}
        </li>
      </ul>
    </div>
  </div>`;
  }
}

// export
module.exports = Manager;
