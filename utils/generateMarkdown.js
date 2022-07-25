// Function to render license badge
function renderLicenseBadge(data) {
  if (data.licenseChoice === "Unlicense") {
    return licenseBadge = "";
  } else {
    return licenseBadge = `![License: ${data.licenseChoice}](https://img.shields.io/badge/License-${data.licenseChoice}-green)`;
  }
};

// Function to render information in license section
function renderLicenseSection(data) {
  if (data.licenseChoice === 'Unlicense') {
    return license = "There is no license in use for this project";
  } else {
    return license = `This project is licensed under the ${data.licenseChoice} license.`;
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data)
  renderLicenseSection(data)
  return `# ${data.title}
${licenseBadge}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
For further questions about the repository, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}?tab=repositories).
`;
}

module.exports = generateMarkdown;
