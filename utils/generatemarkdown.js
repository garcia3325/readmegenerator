//function to Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ##License
    [![license](https://img.shields.io/badges/license-${data.licensing}-blue)](https://shields.io)
    )]
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Additional Info] (additional-info)
    ## Description:
    ${data.description}
    ## Usage
    ${data.usage}
    ## License:
    ${data.licensing}
    ##Contribution
    ${data.contribution}
    ##Testing
    ${data.testing}
    ## Additional Info
    -Github [${data.github}](https://github.com/${data.github})
    - Email: ${data.email} `;
}

module.exports = generateMarkdown;