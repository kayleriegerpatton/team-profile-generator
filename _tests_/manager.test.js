// classes
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {}
  getId() {}
  getEmail() {}
  getRole() {
    // return 'Employee'
  }
}

class Manager extends Employee {
    constructor (officeNumber){
        super();
        this.officeNumber = officeNumber;
    }
    getRole(){
        // return 'Manager'
    }
}

class Engineer extends Employee {
    constructor (github){
        super();
        this.github = github;
    }
    getGithub();
    getRole(){
        // return 'Engineer'
    };
}

class Intern extends Employee {
    constructor (school){
        this.school = school
    }
    getSchool (){

    }
    getRole(){
        // return 'Intern'
    }
}
