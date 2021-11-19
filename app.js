const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');
const team = [];

const addManager = function() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter Manager's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: "Enter Manager's ID",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the manager's ID.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter Manager's email",
      validate: emailInput => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'officeNumber',
      message: "Enter Manager's office number",
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter the manager's office number.");
          return false;
        }
      }
    },
  ])
  .then(managerData => {
    const {name, id, email, officeNumber} = managerData;
    const manager = new Manager(name, id, email, officeNumber);

    team.push(manager);
    console.log(manager);
  })
}

const addEmployee = function() {
  console.log(`
  ========================
  Add Employee to the Team
  ========================
  `)
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Enter Employee's role",
      choice: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "Enter Employee's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: "Enter Employee's ID",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee's ID.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter Employee's email",
      validate: emailInput => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter Engineer's github username",
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter Engineer's github username.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter Intern's school or education",
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter intern's school or education.");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'addEmployee',
      message: 'Would you like to add more team members?',
      default: false,
    }
  ])
  .then(employeeData => {
    let employee = {name, id, email, role, github, school, addEmployee} = employeeData;

    if (role === "Engineer") {
      employee = new Engineer(name, id, email, github);
      console.log(employee);

    } else if (role === "Intern") {
      employee = new Intern(name, id, email, school);
      console.log(employee);
    }

    team.push(employee);
    console.log(team);

    if (addEmployee) {
      return addEmployee(team);
    } else {
      return team;
    }
  })
}

const addHTML = function() {
  // append
}

const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/team.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Team document created!'
      })
    })
  })
}

addManager()
  .then(addEmployee)
  .then(team => {
    return generateHTML(team);
  })
  .then(dataHTML => {
    return writeToFile(dataHTML);
  })
  .catch(err => {
    console.log(err);
  });