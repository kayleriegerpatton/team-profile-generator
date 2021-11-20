class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }
  getGithub() {}
  getRole() {
    // return 'Engineer'
  }
}

// export
module.exports = Engineer;
