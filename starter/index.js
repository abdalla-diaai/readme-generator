const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
'What is the title of the project?',
'What is the Description of the project?',
'How to install the project?',
'How to use the project?',
'What kind of licence to use?',
'Are there any contributors?',
'Are there any tests?',
'Get in touch?' 
];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the Description of the project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How to install the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use the project?',
        },
        {
            type: 'checkbox',
            message: 'What kind of licence to use?',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache-2.0', '0BSD', 'MPL-2.0', 'LGPL', 'EPL-2.0', 'Artistic-2.0']
          },
        {
            type: 'input',
            name: 'contribution',
            message: 'Are there any contributors?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are there any tests?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Get in touch?',
        },
    ])
    .then((data) => {
        console.log(data);
    });


// function to write README file
function writeToFile(fileName, data) {



}

// function to initialize program
function init() {

}

// function call to initialize program
init();
