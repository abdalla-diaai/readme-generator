// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Contents:
  1. [Description](#Questions)
  ## Description:\n ${data.description}
  ## Installation:\n ${data.installation}
  ## Usage:\n ${data.usage}
  ## License:\n ${data.license}
  ## Contribution:\n ${data.contribution}
  \n
  \n
  \n
  \n
  \n
  \n
  \n
  \n
  \n
  \n
  \n
  \n
  \n

  ## Questions
  [Link to GitHub](${data.questions})
  `;
}

module.exports = generateMarkdown;
