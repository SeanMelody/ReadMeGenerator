const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
const writeTheFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?: "
    },
    {
        type: "input",
        name: "description",
        message: "Please describe this project?: "
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Please enter the Table of Contents: "
    },
    {
        type: "input",
        name: "installation",
        message: "How would you install this project?: "
    },
    {
        type: "input",
        name: "usage",
        message: "How would you use this project?: "
    },
    {
        type: "list",
        name: "license",
        message: "please pick a license: ",
        choices: ["Apache", "MIT", "Mozilla", "Unlicense", "WTFPL"],
    },
    {
        type: "input",
        name: "contribute",
        message: "What are the contribution guidelines?: "
    },
    {
        type: "input",
        name: "testInst",
        message: "Any test instructions?: "
    },

];

// function to write README file
function writeToFile(ReadMe, data) {

    writeTheFile(ReadMe, data)
        .then(() => console.log("ReadMeWritten"))
        .catch((err) => console.log(err));
    return writeFileTest(ReadMe, data)
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function generateMarkdown() {
        })
        .then(console.log("All Done"))
    // .then(console.log("Done"))
    //     .then({ data }) => {
    //     const data = generateMarkdown(questions)
    // }
    //     const name = "example"
    //     )
    //     writeToFile(name, data)

}

// function call to initialize program
init();
