//function to Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectTitle}
    ##License
    [![license](https://img.shields.io/badges/license-${data.license}-blue.svg)](https://shields.io)
    )]
    ## Table of Contents
    - [Description] (#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Additional Info] (#Questions)

    ### Description:
    ${data.projectDescription}
    ### Usage
    ${data.usage}
    ### License:
    ${data.license}
    ###Contributing
    ${data.contributing}
    ###Tests
    ${data.test}
    ### Questions
    -Github [${data.githubUserName}}](https://github.com/${data.githubUserName})
    - Email: ${data.email} `;
}

module.exports = generateMarkdown;