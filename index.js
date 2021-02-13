const readMeDataArgs = process.argv.slice(2, process.argv.length);
const [projectTitle, projectDescription, projectInstallation, usageInformation, contributingGuidelines, testInformation, licenseInformation, githubUser, email] = readMeDataArgs; ///destructuring the data here

const fs = require('fs'); ///initializing fs here

const inquirer = require('inquirer'); ////initializing inquirer here for later use

const writeToFile = require('./utils/generateMarkdown.js'); ///can use function(s) from generate markdown page

//This is the content that displays user input in terminal
const promptUser = (data) => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput && titleInput.trim().length > 0) {
                return true;
            } else {
                console.log('You need to input a title for your project!');
                return false;
            }
        }
        }, 
        {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of your project:',
        validate:  projectInput => {
            if (projectInput && projectInput.trim().length > 0) {
                return true;
            } else {
                console.log('You need to input a description for your project!');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please provide instructions on how to correctly install your project:',
        validate: installationInput => {
            if (installationInput && installationInput.trim().length > 0) {
                return true;
            } else {
                console.log('You need to provide instructions on how to install your project!');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'usageInformation',
        message: 'Please provide additional details regarding usage information for your project:',
        validate: usageInput => {
            if (usageInput && usageInput.trim().length > 0) {
                return true;
            } else {
                console.log('You need to provide details for usage information for your project!');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'contributingGuidelines',
        message: 'Please provide additional details regarding contributing guidelines for your project:',
        validate: contributingInput => {
            if (contributingInput && contributingInput.trim().length > 0) {
                return true;
            } else {
                console.log('You need to provide additional details about contributing guidelines for your project!');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'testInformation',
        message: 'Please provide additional details regarding test information for your project:',
        validate: testInput => {
            if (testInput && testInput.trim().length > 0) {
                return true;
            } else {
                console.log('You need to provide details regarding testing your project!');
                return false;
            }
        }
        },
        {
        type: 'list',
        name: 'licenseInformation',
        message: 'Please choose one license from the list below:',
        choices: ['MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3' , 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
        type: 'input',
        name: 'githubUser',
        message: 'Please enter Github username:',
        validate: githubUserInput => {
            if (githubUserInput && githubUserInput.trim().length > 0) {
                return true;
            } else {
                console.log('Please enter a valid GitHub username!');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput && emailInput.trim().length > 0) {
                return true;
            } else {
                console.log('Please enter a valid email!');
                return false;
            }
        }
        }
    ])
} ////After questions are answered, the readme is generated below
promptUser().then(answers => fs.writeFile('READMEsample.md', writeToFile(answers.projectTitle, answers.projectDescription, answers.projectInstallation, answers.usageInformation, answers.contributingGuidelines, answers.testInformation, answers.licenseInformation, answers.githubUser, answers.email), err => {
    if (err) {
        throw err;
    }
})

)

