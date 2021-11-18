const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(data) {
    super(data);

    this.github = data.github;
  }

  getGithub() {
    // return link to github site
  }

  getRole() {
    return `<i class="fa-solid fa-wrench"></i> Engineer`;
  }
}

module.exports = Engineer;