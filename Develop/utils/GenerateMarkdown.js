
// Function to generate output.md file
function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)  <br/>
## Description
  ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
This application is covered by the ${answers.license} license. 

## Contributors
  ${answers.contributors}
## Tests
  ${answers.tests}
## Questions
  ${answers.questions}
 <br/>
 Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
 <br/>
 Email me with any questions: ${answers.email}
 <br/>
  `;
}

//Exports data from generateReadme code
module.exports = generateReadme;