class Employee {
  
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
    return `<i class="fa-solid fa-clipboard"></i> Employee`
  }
}

module.exports = Employee;