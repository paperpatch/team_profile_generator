class Employee {
  constructor(data) {

  }

  getName() {
    return `${data.name}`;
  }

  getId() {
    return `ID: ${data.id}`
  }

  getEmail() {
    return `Email: ${data.email}`
  }

  getRole() {
    return `<i class="fa-solid fa-wrench"></i> Employee`
  }
}

module.exports = Employee;