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

const generateHTML = require("./generateHTML");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// const employees = [];
const team = [];

function init() {
    console.log("Welcome to the Team Profile Generator!");
    console.log("Please build your team");
    addManager();
    
}

// team manager prompt
function addManager() {
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
 
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      team.push(manager);
      addTeamMember();
          });
  };

  function addTeamMember() {
    inquirer  
      .prompt([
        {
          type: 'list',
          name: 'memberType',
          message: 'What type of team member would you like to add?',
          choices: ['Engineer', 'Intern', 'Finish Building Team'],
        },
      ])
      .then(answers => {
        switch (answers.memberType) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
            // default;
          writeHTML();
            break;
        }
      });

      const addEngineer = () =>{
        return inquirer.prompt([
            {
                //Engineer's Name
                type: 'input',
                message: "What is the Engineer's name?",
                name: 'name',
            },
            {
                //Engineer's ID
                type: 'input',
                message: 'What is their employee id?',
                name: 'id'
            },
            {
                //Engineer's email
                type: 'input',
                message: 'What is their email address?',
                name: 'email'
            },
            {
                //Engineer's GitHub username
                type: 'input',
                message: 'What is their Github username?',
                name: 'github'
            }
        ])
        .then ((engineerInfo) =>{
       const engineer= new Engineer(engineerInfo.name,engineerInfo.id,engineerInfo.email,engineerInfo.github) 
    
       team.push(engineer)
    
       addTeamMember()
       })
    }

    const addIntern = () =>{
      return inquirer.prompt([
          {
              //Intern's Name
              type: 'input',
              message: "What is the Intern's name?",
              name: 'name',
          },
          {
              //Intern's ID
              type: 'input',
              message: 'What is their employee id?',
              name: 'id'
          },
          {
              //Intern's email
              type: 'input',
              message: 'What is their email address?',
              name: 'email'
          },
          {
              //Intern's GitHub username
              type: 'input',
              message: 'What school to they attend?',
              name: 'school'
          }
      ])
      .then ((internInfo) =>{
     
     const intern= new Intern (internInfo.name,internInfo.id,internInfo.email,internInfo.school) 
  
     team.push(intern)
  
     addTeamMember()
     })
  }
  }

 addManager()

  function writeHTML() {
    fs.writeFile("./assets/webpage/index.html", generateHTML(team), (err) => {
      if (err) throw err;
      console.log("Team Profile Generated");
    });
  }
    