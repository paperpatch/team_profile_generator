const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const init = function() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Select team member's role",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: "Enter team member's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter team member's ID",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter an ID.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter team member's email",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter a valid email address.');
          return false;
        }
      }
    },
  ])
}

const determineRole = function({role, name, id, email}) {
  if (role === "Manager") {
    inquirer.prompt([

    ])
  }
}

const appendHTML = function() {
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

init()
  .then(basicInfo => {
    return determineRole(basicInfo);
  })
  .then(roleInfo => {
    return appendHTML(roleInfo);
  })
  .then(members => {
    return writeToFile(members);
  })
  .catch(err => {
    console.log(err);
  });