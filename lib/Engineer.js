const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getRole() {
    // return `<i class="fa-solid fa-wrench"></i> Engineer`;
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;