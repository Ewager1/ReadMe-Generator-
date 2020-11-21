// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}                                            

${getLicenseInfo(data.license).badge}

- [Live Link](${data.liveLink})

- ![Project Image](./utils/projectImage/${data.projectImage})

## Description                        

${data.description} 


## Table of Contents 
- [Installation](#installation) 
- [Usage](#usage) 
- [License](#license) 
- [Contributions](#contributions) 
- [Tests](#tests) 
- [Questions](#questions) 

## Installation 

- ${data.installation}

## Usage 

- ${data.usage}

## License 

- ${data.license} 

- [Copywrite Text](${getLicenseInfo(data.license).licenseLink})

## Contributions

- ${data.contributions}

## Tests 

- ${data.tests}

## Questions 
- ${data.contact}

- My Email: ${data.email}
- My Github: [${data.gitHubUserName}](${data.gitHubUrl})
`;
}

//helper function: grabs license badge and license text based on users choice.
function getLicenseInfo(licenseChoice) {
  let licenseObj = {};
  // CREDIT: badges grabbed from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch (licenseChoice) {
    case "MIT":
      licenseObj = {
        badge:
          "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
        licenseLink: "https://opensource.org/licenses/MIT",
      };
      return licenseObj;

    case "Apache License 2.0":
      licenseObj = {
        badge:
          "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
        licenseLink: "https://www.apache.org/licenses/LICENSE-2.0.txt",
      };
      return licenseObj;

    case "GNU GPLv3":
      licenseObj = {
        badge:
          "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
        licenseLink: "https://www.gnu.org/licenses/gpl-3.0.en.html",
      };
      return licenseObj;
    case "ISC ":
      licenseObj = {
        badge:
          "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
        licenseLink: "https://opensource.org/licenses/ISC",
      };
      return licenseObj;
  }
}

module.exports = generateMarkdown;
