const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const generateHTML = (manager, team) => {
  // Create a new JSDOM instance
  const dom = new JSDOM(``);

  // Get a reference to the document object
  const document = dom.window.document;

  // Create the elements for the manager's information
  const managerName = document.createElement("p");
  managerName.textContent = `Name: ${manager.name}`;

  const managerId = document.createElement("p");
  managerId.textContent = `Employee ID: ${manager.employeeId}`;

  const managerEmail = document.createElement("p");
  managerEmail.textContent = `Email: ${manager.email}`;

  const managerOffice = document.createElement("p");
  managerOffice.textContent = `Office Number: ${manager.officeNumber}`;

  // Create an element for the team section
  const teamSection = document.createElement("div");
  teamSection.setAttribute("id", "team");
  
  // Create elements for each team member
  team.forEach((member) => {
    const memberName = document.createElement("p");
    memberName.textContent = `Name: ${member.name}`;

    const memberId = document.createElement("p");
    memberId.textContent = `Employee ID: ${member.employeeId}`;

    const memberEmail = document.createElement("p");
    memberEmail.textContent = `Email: ${member.email}`;

    const memberDetail = document.createElement("p");
    if (member.githubUsername) {
      memberDetail.textContent = `GitHub username: ${member.githubUsername}`;
    } else {
      memberDetail.textContent = `School: ${member.school}`;
    }

    const memberDiv = document.createElement("div");
    memberDiv.appendChild(memberName);
    memberDiv.appendChild(memberId);
    memberDiv.appendChild(memberEmail);
    memberDiv.appendChild(memberDetail);

    teamSection.appendChild(memberDiv);
  });

  // Add the manager's information and team section to the document
  document.body.appendChild(managerName);
  document.body.appendChild(managerId);
  document.body.appendChild(managerEmail);
  document.body.appendChild(managerOffice);
  document.body.appendChild(teamSection);

  // Write the HTML to a file
  const fs = require('fs');
  fs.writeFileSync('./manager.html', dom.serialize());
};

module.exports = generateHTML;
