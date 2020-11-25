// function to generate markdown for README
function generateMarkdown(data) {

  if (data.license === "Apache") {
    console.log("I picked apache")
    licenseShield = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (data.license === "MIT") {
    console.log("I picked MIT")
    licenseShield = `<img src="https://img.shields.io/badge/LICENSE-mit-green"/>`
  }
  if (data.license === "Mozilla") {
    console.log("I picked Mozilla")
    licenseShield = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0"
  }
  if (data.license === "Unlicense") {
    console.log("I picked Unlicense")
    licenseShield = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }


  return `# ${data.title}

  
  ## Description:
    ${data.description}
  
  ## Table of Contents:
    <a href src= "#Description">Description</a>
    <a href src= "#TableOfContents">Table of Contents</a>
    <a href src= "#Installation">Installation Instructions</a>
    <a href src= "#Usage">Usage</a>
    <a href src= "#License">License</a>
    <a href src= "#contribute">Contribution Guidelines</a>
    <a href src= "#TestInstructions">Test Instructions</a>
    <a href src= "#Questions">Questions</a>
  
  ## Installation Instructions:
  ${data.installation}
  
  ## Usage:
  ${data.usage}
  
  ## License: 
  ${licenseShield}

  ## Contribution Guidelines: 
  ${data.contribute}

  ## Test Instructions: 
  ${data.testInst}
  
  ## Questions:
  Check out my GitHub: https://github.com/${data.github}
  Or if you have any questions email me: ${data.email}

`;
}

module.exports = generateMarkdown;
