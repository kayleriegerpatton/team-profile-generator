class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super();
    this.officeNumber = officeNumber;
  }
  getRole() {
    // return 'Manager'
  }
}
