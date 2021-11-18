const Employee = require('./Employee');

class Intern extends Employee {
  constructor(data) {
    super(data);

    this.school = data.school;
  }

  getSchool() {
    return `<i class="fa-solid fa-school"></i> School: ${this.school}`
  }

  getRole () {
    return `<i class="fa-solid fa-pencil"></i> Intern`
  }
}

module.exports = Intern;