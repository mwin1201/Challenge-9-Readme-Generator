// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  1. [Description] (#description)
  2. [Installation] (#installation)
  3. [Usage] (#usage)
  4. [Contributing] (#contributing)
  5. [Tests] (#tests)
  6. [License] (#license)
  7. [Questions] (#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License

  ## Questions
  See GitHub profile: <https://github.com/${data.username}>
  Email me with questions: <${data.email}>

`;
}

module.exports = generateMarkdown;
