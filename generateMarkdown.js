export function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }
  const badges = {
      'MIT': '![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)',
      'Apache 2.0': '![Apache 2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue)',
      'GPL 3.0': '![GPL 3.0 License](https://img.shields.io/badge/license-GPL%203.0-orange)',
  };
  return badges[license] || '';
}

export function renderLicenseLink(license) {
  if (!license) {
      return '';
  }
  const links = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0',
      'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return links[license] || '';
}



