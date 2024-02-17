const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'welcome',
        message: 'Welcome to Automated README Generator. You will be presented with several prompts to enter the project title, description, installation, usage, contributors, license, testing, and finally GitHub Repository Link. Press Enter to continue ...',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: ',
    },
    {
        type: 'checkbox',
        message: 'Choose License: ',
        name: 'license',
        choices: ['MIT', 'GPL', 'Apache-2.0', '0BSD', 'MPL-2.0', 'LGPL', 'EPL-2.0', 'Artistic-2.0']
      },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contributors: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Unit Testing: ',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'GitHub Repository Link: ',
    },
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
    .prompt(
        
        questions)
    .then((data) => {
        const convert = generateMarkdown(data)
        writeToFile('readmeGenerator.md', convert )
    });
}

// function call to initialize program
init();
