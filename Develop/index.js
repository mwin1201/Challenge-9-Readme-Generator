// TODO: Include packages needed for this application
const inquirer = require("inquirer");
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
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for this project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// function to grab user responses
const promptUser = () => {
    return inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
    });
};

// TODO: Create a function to initialize app
function init() {
    promptUser();
};

// Function call to initialize app
init();
