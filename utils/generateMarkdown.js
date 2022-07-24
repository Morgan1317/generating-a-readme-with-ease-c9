// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseText = license.toString()
  if(licenseText == 'MIT'){
    return `![badge](https://img.shields.io/badge/License-MIT-red)`
  }
  else if(licenseText == ['APACHE 2.0']){
    return `![badge](https://img.shields.io/badge/License-APACHE%202.0-yellow)`
  }
  else if (licenseText == ['GPL 3.0']){
    return `![badge}](https://img.shields.io/badge/License-GPL%203.0-blue)`
  }
  else if (licenseText == ['BSD 3']){
   return `![badge](https://img.shields.io/badge/License-BSD%203-blueviolet)`
  }
  else{
    return '';
  }

}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseText = license.toString()
  if(licenseText === '' || licenseText === 'None'){
    return '';
  }
  else{
    return `* [License](#license)`
  }
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = license.toString()
  if(licenseText === '' || licenseText === 'None'){
    return ''
  }
  else{
    return `## License
This project is licensed under the ${license} license.`

  }
  
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

  ${renderLicenseLink(data.license)}

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

  ${renderLicenseSection(data.license)}


  ## Contributing

  ${data.contributions}

  ## Tests

  To run tests, run the following command:

  ~~~
  ${data.test}
  ~~~

  ## Questions

  If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. Find me on <a href="https://github.com/${data.username}" target="_blank">github</a> to learn more about my work  😁.
`;
}

module.exports = generateMarkdown;
