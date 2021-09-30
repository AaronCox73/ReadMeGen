// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to add a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a step-by-step description of how to get the development enviroment running (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter a valid installation description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter a valid set of instructions and example of use');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What did you licenses this project with? (Check all that apply)',
            choices: ['GNU GPL v3', 'IBM', 'MIT', 'Mozilla', 'Apache 2.0 License']
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like others to contribute to your application?',
            default: true
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to write tests for your application?',
            default: false
        },
        {
            type: 'input',
            name: 'githubusername',
            message: 'Please enter you GitHub username (Required)',
            validate: githubusernameInput => {
                if (githubusernameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide a valid Email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid Email');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        const readMeBody = generateMarkdown(answers)
        fs.writeFileSync('README.md', readMeBody)
    });

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
