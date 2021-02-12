
const profileDataArgs = process.argv.slice(2, process.argv.length);
//const fileName = profileDataArgs[0]
//const sampleData = profileDataArgs[1]
const [projectTitle, projectDescription, projectInstallation, usageInformation, contributingGuidelines, testInformation, licenseInformation, githubUser, email] = profileDataArgs ///destructuring the data here

const fs = require('fs')

const inquirer = require('inquirer')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file 
//function writeToFile(fileName, data) { //need to update this AND COPIED this over to generateMarkDown file
  // return `
  // # ${fileName}
  // # ${data}`
//}

const writeToFile = require('./utils/generateMarkdown.js')

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//console.log(writeToFile(fileName, sampleData)) //need to call using node index alex giannini (example)
const promptUser = (data) => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
        }, 
        {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of your project:' 
        },
        {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please provide instructions on how to correctly install your project:' 
        },
        {
        type: 'input',
        name: 'usageInformation',
        message: 'Please provide additional details regarding usage information for your project:' 
        },
        {
        type: 'input',
        name: 'contributingGuidelines',
        message: 'Please provide additional details regarding contributing guidelines for your project:' 
        },
        {
        type: 'input',
        name: 'testInformation',
        message: 'Please provide additional details regarding test information for your project:' 
        },
        {
        type: 'checkbox',
        name: 'licenseInformation',
        message: 'Please choose one license from the list below:',
        choices: ['MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3' , 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
        type: 'input',
        name: 'githubUser',
        message: 'Please enter Github username:'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
        }
    ])
}
promptUser().then(answers => fs.writeFile('READMEsample.md', writeToFile(answers.projectTitle, answers.projectDescription, answers.projectInstallation, answers.usageInformation, answers.contributingGuidelines, answers.testInformation, answers.licenseInformation, answers.githubUser, answers.email), err => {
    if (err) {
        throw err;
        //console.log('this appends the data to the read me properly')
    }
})

)

//fs.writeFile('READMEsample.md', writeToFile(projectTitle, projectDescription), err => {
  //  if (err) throw err;
  //  console.log('This worked!')
//})

//promptUser().then(answers => console.log(answers.projectDescription))