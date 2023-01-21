/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/

const inquirer = require("inquirer");
const fs = require("fs");

const questions = [];

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");


const generateHTML = require("./src/generateHTML");

const team = [];

function init() {
    console.log("Welcome to the Team Profile Generator!");
    console.log("Please build your team");
    addManager();
}

const inquirer = require('inquirer');

// team manager prompt
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the team manager\'s name:',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter the team manager\'s employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the team manager\'s email address:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the team manager\'s office number:',
    },
  ])
  .then((answers) => {
    // use the answers to create the team manager object
    const manager = {
      name: answers.name,
      employeeId: answers.employeeId,
      email: answers.email,
      officeNumber: answers.officeNumber,
    };

    // team member prompt
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberType',
          message: 'What type of team member would you like to add?',
          choices: ['Engineer', 'Intern', 'Finish Building Team'],
        },
      ])
      .then((answers) => {
        switch (answers.memberType) {
          case 'Engineer':
            // engineer prompt
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'name',
                  message: 'Enter the engineer\'s name:',
                },
                {
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter the engineer\'s employee ID:',
                },
                {
                  type: 'input',
                  name: 'email',
                  message: 'Enter the engineer\'s email address:',
                },
                {
                  type: 'input',
                  name: 'githubUsername',
                  message: 'Enter the engineer\'s GitHub username:',
                },
              ])
              .then((answers) => {
                // use the answers to create the engineer object
                const engineer = {
                  name: answers.name,
                  employeeId: answers.employeeId,
                  email: answers.email,
                  githubUsername: answers.githubUsername,
                };

                // add the engineer to the team
                // ...

                // go back to the team member prompt
                // ...
              });
            break;
          case 'Intern':
            // intern prompt
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'name',
                  message: 'Enter the intern\'s name:',
                },
                {
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter the intern\'s employee ID:',
                },
                {
                  type: 'input',
                  name: 'email',
                  message: 'Enter the intern\'s email address:',
                },
                {
                  type: 'input',
                    name: 'school',
                    message: 'Enter the intern\'s school:',
                },
                ])
                .then((answers) => {
                // use the answers to create the intern object
                const intern = {
                    name: answers.name,
                    employeeId: answers.employeeId,
                    email: answers.email,
                    school: answers.school,
                };

                // add the intern to the team
                // ...

                // go back to the team member prompt
                // ...
                });
            break;
            case 'Finish Building Team':
                // finish building team
                // ...
                break;
        }
        });
    });


    





