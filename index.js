// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { renderLicenseBadge, renderLicenseLink } from './generateMarkdown.js';


/*// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

These are the requirements for the document:
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, 
Tests, and Questions*/

 

  const licenses = [
    { name: 'MIT', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' },
    { name: 'Apache 2.0', value: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' },
    { name: 'GPL 3.0', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' },
    
  ]

const questions = [
  
  
      {
        type: 'input',
        name: 'project_name',
        message: 'What is the name of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe what the program does.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install this program.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the program.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests the program has undergone.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: licenses.map(license => license.name),
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the link to your github profile?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }
    ]
   


    function generateREADME(answers) {
        return `
# ${answers.project_name}


${renderLicenseBadge(answers.license)}
    
## Description
${answers.description}

### Table of Contents
1. [Installation Instructions](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)

    
## Installation
${answers.installation}
    
## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license. Click ${renderLicenseLink(answers.license)} for more information.
    
## Contributing
${answers.contribution}
    
## Questions

To contact me, visit ${answers.github} or email me at ${answers.email}.  
    `;
    }
    
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        fs.writeFileSync('README.md', readmeContent, (err) => {
            if (err) throw err;
            console.log('README.md has been generated!');
        });
    });