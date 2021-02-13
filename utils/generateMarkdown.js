// Function that actual creates the license/badge in the README
let renderLicenseBadge = (license) => { return `<img src="https://img.shields.io/badge/license-${license}-yellow" alt="" />`;}

///function to actually write the readme data 
let writeToFile = (projectTitle, projectDescription, projectInstallation, usageInformation, contributingGuidelines, testInformation, licenseInformation, githubUser, email) => {
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
  The license which this application is covered under is ${licenseInformation}

  # Contributing: 
  ${contributingGuidelines}

  # Tests: 
  ${testInformation}

  # Questions: 
  GitHub User: ${githubUser} -> https://github.com/${githubUser}

  Please feel free to reach out with any questions at ${email}`
};

///other files (index.js can use the writeToFile function)
module.exports = writeToFile;


