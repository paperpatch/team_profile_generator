const Employee = require('./Employee');

class Manager extends Employee {
  constructor(data) {
    super(data);

    this.officeNumber = data.officeNumber;
  }
  
  getRole() {
    return `<i class="fa-solid fa-mug-saucer"></i> Employee`
  }
}

module.exports = Manager;