"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const employeeList = [];
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer")
const internList = [];
const engineerList = [];
const managerList = [];
const teamStart = () => {
  console.log("Hello welcome to Team Builder");
};
const employeebuild = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "number",
      name: "idNumber",
      message: "What is the employee's id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
    },
  ]);
};

const roleQuestion = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is the employee's Role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};
 const managerQuestions = () => {
     return inquirer.prompt([
         {
             type: "number",
             name: "officeNumber",
             message: "What is the manager's office number?"
         }
     ])
 } 
 const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitHub",
            message: "What is the engineer's gitHub?"
        }
    ])
} 
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
        }
    ])
} 
function anotherOne(){
  return inquirer.prompt([
        {
            type: "confirm",
            name:  "addMember",
            message: "Do you want to add another team member?",
            default: true
        }
    ])
    .then((answers) => {
        const addMember = inquirerResponses.addMember;
        if (addMember ===true){
        builder()
        }
        if (addMember !== true){
            console.log("compile time")
        }
    }
    )
}


function builder() {
  teamStart();
  employeebuild().then((inquirerResponses) => {
    console.log(inquirerResponses);
    const newEmployee = new Employee(
      inquirerResponses.name,
      inquirerResponses.email,
      inquirerResponses.id
    );
    employeeList.push(newEmployee);
    roleQuestion().then((inquirerResponses) => {
      console.log(inquirerResponses);
      const roleType = inquirerResponses.role;

      if (roleType === "Manager") {
        managerQuestions().then((inquirerResponses) => {
          console.log(inquirerResponses);
          const newManager = new Manager(inquirerResponses.officeNumber);
          managerList.push(newManager);
        });
        anotherOne();
      }
      if (roleType === "Engineer") {
        engineerQuestions().then((inquirerResponses) => {
          console.log(inquirerResponses);
          const newEngineer = new Engineer(inquirerResponses.gitHub);
          engineerList.push(newEngineer);
          anotherOne();
        });
      }

      if (roleType === "Intern") {
        internQuestions().then((inquirerResponses) => {
          console.log(inquirerResponses);
          const newIntern = new Intern(inquirerResponses.school);
          internList.push(newIntern);
          anotherOne()
        });
      } else {
        console.log("fail");
        anotherOne()
      }
    });
  });
}

builder();
