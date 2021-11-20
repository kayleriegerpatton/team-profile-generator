class Intern extends Employee {
  constructor({ name, id, email, school }) {
    this.school = school;
  }
  getSchool() {}
  getRole() {
    // return 'Intern'
  }
}

// export
module.exports = { Intern };
