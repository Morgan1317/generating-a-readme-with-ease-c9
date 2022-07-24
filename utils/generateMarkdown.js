// TODO: Create a function that returns a license badge based on which license is passed in and returns the license link and badge
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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseText = license.toString()
  if(licenseText == 'MIT'){
    return `<a href="https://choosealicense.com/licenses/mit/" target="_blank">site</a>`
  }
  else if(licenseText == 'APACHE 2.0'){
    return `<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">site</a>`
  }
  else if (licenseText == 'GPL 3.0'){
    return `<a href="https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)" target="_blank">site</a>`
  }
  else if (licenseText == 'BSD 3'){
   return `<a href="https://opensource.org/licenses/BSD-3-Clause" target="_blank">site</a>`
  }
  else{
    return '';
  }
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = license.toString()
  if(licenseText === '' || licenseText === 'None'){
    return ''
  }
  else{
    return `## License
This project is licensed under the ${license} license.
For more information regarding this license feel free to checkout this ${renderLicenseLink(license)}`
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

  ${renderLicenseSection(data.license)}


  ## Contributing

  ${data.contributions}

  ## Tests

  To run tests, run the following command:

  ~~~
  ${data.test}
  ~~~

  ## Questions

  If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. Find me on github, ${data.username}, to learn more about my work  😁.
`;
}

module.exports = generateMarkdown;
