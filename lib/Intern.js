const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getRole () {
    // return `<i class="fa-solid fa-pencil"></i> Intern`
    return "Intern";
  }

  getSchool() {
    // return `<i class="fa-solid fa-school"></i> School: ${this.school}`
    return this.school;
  }
}

module.exports = Intern;