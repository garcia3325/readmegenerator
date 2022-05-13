const fs = require('fs');
const { writeFile } = require('./utils/generate-file');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email',
  },
  {
    type: 'github',
    name: 'githubUserName',
    message: 'Please enter your Github username',
    validate: githubUserName => {
      if (githubUserName) {
        return true;
      } else {
        console.log('Please enter your Github username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the title of your project',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please the title of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Enter a Description for your project'
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Please enter installation instructions for your application or project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for your application or project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select the appropriate license for your application or project',
    choices: ['MIT', 'Mozilla Public License 2.0', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License']
  },  
]

  // Function to write README File
  function writeToFile(fileName, data) {
    fs.writeFile('README.MD', 'userInput', (err) => {
      if (err)
        throw err;
      console.log('Success! Information transferred to the ReadMe');
    });
  }

  //Function to initialize app
  function init() {
    inquirer.prompt(questions)
      .then(function (userInput) {
        console.log(userInput);
      });
    };
//function call to initialize the app
init();

