// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `<img src="https://img.shields.io/static/v1?label=license&message=${license}&color=yellow"/>`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

function writeToFile(projectTitle, projectDescription, projectInstallation, usageInformation, contributingGuidelines, testInformation, licenseInformation, githubUser, email) { //need to update this
  return `# ${projectTitle}

  ${renderLicenseBadge(licenseInformation)}
  
  # Description: 
  ${projectDescription}
  

  # Table of Contents:

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  # Installation: 
  ${projectInstallation}

  # Usage: 
  ${usageInformation}

  # License: 
  This application is covered under the ${licenseInformation} license

  # Contributing: 
  ${contributingGuidelines}

  # Tests: 
  ${testInformation}

  # Questions: 
  GitHub User: [${githubUser}](https://github.com/${githubUser})

  Please feel free to reach out with any questions at ${email}`
}

//module.exports = generateMarkdown; ////need to update this
//////
module.exports = writeToFile


