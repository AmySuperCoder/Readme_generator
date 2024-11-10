// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }
  const badges = {
      'MIT': '![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)',
      'Apache 2.0': '![Apache 2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue)',
      'GPL 3.0': '![GPL 3.0 License](https://img.shields.io/badge/license-GPL%203.0-orange)',
      'BSD 3': '![BSD 3 License](https://img.shields.io/badge/license-BSD%203-lightblue)',
      // Add more licenses as needed
  };
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}


function renderLicenseLink(license) {
    if (!license) {
        return '';
    }
    const links = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0',
    };
    return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}


function generateLicenseSection(license) {
  let licenseBadge = '';
  let licenseNotice = '';

  switch (license) {
      case 'MIT':
          licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          licenseNotice = 'This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.';
          break;
      case 'Apache 2.0':
          licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          licenseNotice = 'This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.';
          break;
      case 'GPL 3.0':
          licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
          licenseNotice = 'This project is licensed under the GPL v3 License - see the [LICENSE](LICENSE) file for details.';
          break;
      default:
          licenseBadge = '';
          licenseNotice = 'No license specified.';
          break;
  }}



/*
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;*/

