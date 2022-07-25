// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please provide a short description of your project",
    "What are the steps required to install your project?",
    "Please provide instructions and examples for use?",
    "What license will be used for your code?",
    "Please provide contribution guidelines",
    "Please provide explanation of testing procedures",
    "Please provide your GitHub username",
    "Please provide preferred email address for contact purposes",
];

// Function to take in user input using inquirer prompted questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        // Following prompt uses inquirer list type
        {
            type: 'list',
            name: 'licenseChoice',
            message: questions[4],
            choices: [
                "MIT",
                "GPLv2",
                "GPLv3",
                "Apache",
                "BSD 2-clause",
                "BSD 3-clause",
                "LGPLv3",
                "AGPLv3",
                "MPL",
                "EPL",
                "Unlicense",
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'username',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('README.md', generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((data) => writeToFile(data))
        .then(() => console.log('Successfuly generated README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
