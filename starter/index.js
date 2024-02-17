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
   

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('File created!')
);
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message:  questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message:  questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message:  questions[3],
        },
        {
            type: 'checkbox',
            message:  questions[4],
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache-2.0', '0BSD', 'MPL-2.0', 'LGPL', 'EPL-2.0', 'Artistic-2.0']
          },
        {
            type: 'input',
            name: 'contribution',
            message:  questions[5],
        },
        {
            type: 'input',
            name: 'test',
            message:  questions[6],
        },
        {
            type: 'input',
            name: 'questions',
            message:  questions[7],
        },
    ])
    .then((data) => {
        const convert = generateMarkdown(data)
        writeToFile('readmeGenerator.md', convert )
    });
}

// function call to initialize program
init();
