// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Description:
    ${description}
  
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
  ${installation}
  
  ## Usage:
  ${usage}
  
  ## License: 
  ${license}

  ## Contribution Guidelines: 
  ${contribute}

  ## Test Instructions: 
  ${testInst}
  
  ## Questions:
  Check out my GitHub: https://github.com/${github}
  Or if you have any questions email me: ${email}

`;
}

module.exports = generateMarkdown;
