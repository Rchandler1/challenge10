'use strict';
const inquirer = require('..');
function teamStart(){
console.log('Hello welcome to Team Builder')
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },
    {
        type: 'input',
        name: 'id number',
        message: 'What is the employee id number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    },
]

inquirer.prompt(questions).then((answers) => {
    console.log('employeeAnswer');
    console.log(JSON.stringify(answers, null, '  '));
  });

}

teamStart()