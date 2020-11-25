// function to generate markdown for README
function generateMarkdown(data) {
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
  ${data.license}

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
