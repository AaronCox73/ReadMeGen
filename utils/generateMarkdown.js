// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = ''

  if (license === 'GNU GPL v3') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'IBM') {
    badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  return badge

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var link = ''

  if (license === 'GNU GPL v3') {
    link = 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'IBM') {
    link = 'https://opensource.org/licenses/IPL-1.0'
  } else if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Mozilla') {
    link = 'https://opensource.org/licenses/MPL-2.0'
  } else {
    link = 'https://opensource.org/licenses/Apache-2.0'
  }
  return link

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  var explanation = ''

  if (licenses === 'GNU GPL v3') {
    explanation = `The GNU operating system is a complete free software system, upward-compatible with Unix. GNU stands for “GNU's Not Unix”. ... Richard Stallman made the Initial Announcement of the GNU Project in September 1983. A longer version called the GNU Manifesto was published in March 1985.`
  } else if (licenses === 'IBM') {
    explanation = `
    A licensing model consists of an application that needs a license, and a license file that contains the license information. The license file defines what software or features the license is for, how long it is valid for, how many users can use the software, the computers on which the software can be used, and so on.`
  } else if (licenses === 'MIT') {
    explanation = `
    The primary terms and conditions of the MIT license are to grant permissions and indemnify developers for future use. Specifically, it grants any person who obtains a copy of the software and associated files the right to use, copy, modify, merge, distribute, publish, sublicense, and sell copies of the software.`
  } else if (licenses === 'Mozilla') {
    explanation = `MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater.`
  } else {
    explanation = `
    The Apache License 2.0 makes sure that the user does not have to worry about infringing any patents by using the software. The user is granted a license to any patent that covers the software. This license is terminated if the user sues anyone over patent infringement related to this software.`
  }
  return explanation
}
// function to let other's know whether they can or cannot contribute
function confirmContribution(contribution) {
  var contribution = ''
  if (confirmContribution === "false") {
    contribution = `Please DO NOT contribute to this application`
  } else {
    contribution = `Please DO contribute to this application`
  }
  return contribution
}

// function to write tests for the application
function confirmTests(tests) {
  var tests = ''
  if (confirmTests === "false") {
    tests = `No tests will be written for this application`
  } else {
    tests = `Tests will be written for this application`
  }
  return tests
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.licenses)}

  ## Description 
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  Add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  
  
  ## Installation
  
${data.installation}
  
  ## Usage 
  
 ${data.usage}
 

  
  ## License
  
   <a  href ='${renderLicenseLink(data.licenses)}' > ${data.licenses} </a>
  
  ${renderLicenseSection(data.licenses)}
 
  ## Contributing

  ${confirmContribution(data.confirmContribution)}
 
  ## Tests
  
  ${confirmTests(data.confirmTests)}

  ## Questions 
  GitHub: <a href = 'https://github.com/${data.githubusername}'> ${data.githubusername} </a>
  Email: <a href = 'mailto:${data.email}'> ${data.email} </a>

`;
}

module.exports = generateMarkdown;
