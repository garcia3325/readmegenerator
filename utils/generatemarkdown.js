//function to Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectTitle}
    ##License
    [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Additional Info] (#additional-info)
    ## Description:
    ${data.projectDescription}
    ## Usage
    ${data.usage}
    ## License:
    ${data.license}
  
    ## Additional Info
    -Github [${data.githubUserName}}](https://github.com/${data.githubUserName})
    - Email: ${data.email} `;
}

module.exports = generateMarkdown;