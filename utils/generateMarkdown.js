// function to generate markdown for README
function generateMarkdown(data) {

  // If statements for which license is picked and then displaying that license shield

  // If statement for if Apache License is picked
  if (data.license === "Apache") {
    licenseShield = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  // If statement for if MIT License is picked
  if (data.license === "MIT") {
    licenseShield = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  // If statement for if Mozilla License is picked
  if (data.license === "Mozilla") {
    licenseShield = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  // If statement for if Unlicense License is picked
  if (data.license === "Unlicense") {
    licenseShield = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  // If statement for if WTFPL License is picked
  if (data.license === "WTFPL") {
    licenseShield = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }

  // Return the function is a string that will be the readMe contents
  return `# ${data.title} 

${licenseShield}

## Description

    ${data.description}


## Table of Contents

  [Description](##Description)

  [Installation](##Installation)

  [Usage](##Usage)

  [License](##License)

  [Contributing](##Contributing)

  [Tests](##Tests)


## Installation

    ${data.installation}

## Usage

    ${data.usage}

## License

    This application is covered under the ${data.license} License

## Contributing

    ${data.contribute}

## Tests

    ${data.testInst}


## Questions?

  Check out my GitHub:

  [github.com/${data.github}](https://github.com/${data.github})

  Or if you have any questions email me: 
    ${data.email}`
    ;

}

// module exports to let the generate markdown be used in the program
module.exports = generateMarkdown;


