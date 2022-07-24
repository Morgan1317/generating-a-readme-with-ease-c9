// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  let badge =''
  if(license == 'MIT'){
    badge =  `![badge](https://img.shields.io/badge/License-MIT-red)`
  }
  else if(license == ['APACHE 2.0']){
    return `![badge](https://img.shields.io/badge/License-APACHE%202.0-yellow)`
  }
  else if (license == ['GPL 3.0']){
    return `![badge}](https://img.shields.io/badge/License-GPL%203.0-blue)`
  }
  else if (license == ['BSD 3']){
   return `![badge](https://img.shields.io/badge/License-BSD%203-blueviolet)`
  }
  else{
    return '';
  }

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return`
    ## License
    `
  }
  return `
  ## License 
  This project is licensed under the ${license} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  

  ## Description

  ${data.desc}
  
  ## Table of Contents
  

  * [Installation](#installation)
  
  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ~~~
  ${data.command}
  ~~~

  ## Usage

  ${data.ntk}

  ## Contributing

  ${data.contributions}

  ## Tests

  To run tests, run the following command:

  ~~~
  ${data.test}
  ~~~

  ## Questions

  If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. You can learn more about my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
