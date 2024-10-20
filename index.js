// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs, { write } from 'fs';

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
        name: 'future',
        message: 'Please provide any future ideas' 
     },
     {
        type: 'input',
        name: 'contributing',
        message: 'Please provide some info on how other developers can contribute to this project' 
     },
     {
        type: 'input',
        name: 'github',
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

const generateREADME = (data) =>
   `# ${data.title}
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Technologies](#Technologies)
- [Usage](#usage)
- [Challenges](#challenges)
- [Tests](#tests)
- [Future Implementation](#Future-Implementation)
- [Contributing](#Contributing)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Technologies
${data.technologies}

## Usage
${data.Usage}

## Challenges
${data.challenges}

## Tests
${data.tests}

## Future Implementation
${data.future}

## Contributing
${data.contributing}

## Questions
My GitHub profile is ${data.github}
Please contact me at ${data.email}

## License
${data.license}`;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   // console.log('Printing from writeToFile');
   // console.log(fileName);
   // console.log(data.future);

   const readmePageContent = generateREADME(data);
   fs.writeFile(fileName,readmePageContent, (err) =>
       err ? console.log(err) : console.log('Successfully created Sample-README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {

    //invoke inquirer and pass the array of questions to the prompt
    inquirer
        .prompt(questions)
        .then((answers) => writeToFile('Sample-README.md',answers));
}

// Function call to initialize app
init();
