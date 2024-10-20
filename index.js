// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the title of your project' 
     },
     {
         type: 'input',
         name: 'description',
         message: 'Please provide a brief description of this project, the motivation and what problem does it solve' 
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions' 
     },
     {
        type: 'input',
        name: 'technologies',
        message: 'Please provide the technologies used' 
     },
     {
        type: 'input',
        name: 'usage',
        message: 'Please provide in detail on how to use / execute this app' 
     },
     {
        type: 'input',
        name: 'challenges',
        message: 'Please provide any challenges encountered' 
     },
     {
        type: 'input',
        name: 'tests',
        message: 'Please provide any test cases / test scenarios for a successful execution of the App' 
     },
     {
        type: 'input',
        name: 'future-implementation',
        message: 'Please provide any future ideas' 
     },
     {
        type: 'input',
        name: 'contributing',
        message: 'Please provide some info on how other developers can contribute to this project' 
     },
     {
        type: 'input',
        name: 'github-profile',
        message: 'Please provide your GitHub profile' 
     },
     {
        type: 'input',
        name: 'email',
        message: 'Please provide your Email Address if anyone has questions to reach out to' 
     },
     {
        type: 'list',
        name: 'license',
        message: 'Please select the type of licenses',
        choices:['Apache License v2.0','GNU General Public License v3.0','MIT License']
     }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    //invoke inquirer and pass the array of questions to the prompt
    inquirer
        .prompt(questions)
        .then((answers) => console.log(answers.title));
}

// Function call to initialize app
init();
