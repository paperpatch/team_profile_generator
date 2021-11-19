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

const determineRole = function() {
  
}

init()
  .then(basicInfo => {
    return determineRole(basicInfo);
  })
  .catch(err => {
    console.log(err);
  });

// add Personnel
// make HTML
// add HTML
// 

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name,
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated