const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'welcome',
        message: 'Greetings to the Automated README Generator! You will encounter a series of prompts to input information such as project title, description, installation instructions, usage details, contributing, license, testing procedures, and lastly, questions section with GitHub Repository Link and contact email. Press Enter to proceed...',
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
        choices: ['MIT', 'GPL', 'Apache-2.0', '0BSD', 'MPL-2.0', 'LGPL', 'EPL-2.0', 'Artistic-2.0', 'Other']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Unit Testing: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: '
        
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'File Name: '
        
    },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        // TODO: Describe how this ternary operator works
        err ? console.error(err) : console.log('File created!')
    );
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const makeMD = generateMarkdown(data)
            writeToFile(`${data.fileName}.md`, makeMD);
        });
}

// function call to initialize program
init();
