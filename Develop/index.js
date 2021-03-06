// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter your project title");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (required)',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Please enter a description of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?',
        default: 'Installation instructions coming soon...'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?',
        default: 'Usage information coming soon...'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?',
        default: 'Contribution guidelines coming soon...'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for this project?',
        default: 'Test instructions coming soon...'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to associate with this project? (required)',
        choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Please select a license of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username (required)?',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Please select a license of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address (required)?',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Please select a license of your project');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(fileName, data, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// function to grab user responses
const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(answers => {
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(markdown => {
        writeToFile("./dist/README.md", markdown);
        console.log('New README created!');
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();
