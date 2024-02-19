// function to generate markdown for README
const licenseIcons = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GPL': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'MPL-2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'LGPL': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    'EPL-1.0': '(https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    'Artistic-2.0': '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
}

function generateMarkdown(data) {
    let license;
    if ((data.license in licenseIcons)) {
        license = licenseIcons[data.license];
    } else if (data.license === ' '){
        license = 'Not Available';
    } else {
        license = data.license;
    }
    return `# ${data.title} ${license}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribution](#Contributing)
  * [Questions](#questions)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${license}

  ## Contributing
  ${data.contributing}
  
  ## Questions
  Check my GitHub profile or get in touch if you have any questions by clicking on contact link below to send me an email. 

  [GitHub Profile](https://github.com/${data.github})

  [Contact Email](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
