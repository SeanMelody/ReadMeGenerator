// function to generate markdown for README
function generateMarkdown(data) {

  // console.log(data)
  console.log("Start of generate markdown")
  console.log(data)
  if (data.license === "Apache") {
    console.log("I picked apache")
    licenseShield = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (data.license === "MIT") {
    console.log("I picked MIT")
    licenseShield = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (data.license === "Mozilla") {
    console.log("I picked Mozilla")
    licenseShield = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0"
  }
  if (data.license === "Unlicense") {
    console.log("I picked Unlicense")
    licenseShield = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  if (data.license === "WTFPL") {
    console.log("I picked WTFPL")
    licenseShield = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }


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


Questions?

    Check out my GitHub:

    [github.com/${data.github}](https://github.com/${data.github})

    Or if you have any questions email me: 
      ${data.email}`
    ;

}
// console.log("End of return")

module.exports = generateMarkdown;


