// Constants Declared First
// Required Consts

// FS for writing the readme
const fs = require("fs")
// Using the Inquirer Package
const inquirer = require("inquirer")
// Util here
const util = require("util");

// Linking the Generate Markdown JS
const generateMarkdown = require("./utils/generateMarkdown");
// For writing the new file
const writeNewFile = util.promisify(fs.writeFile);

// declaring the variables

// ReadMe contents string
let readMeContents = ""
// Filname string
let filename = ""


// array of questions for user

// 9 questions 1 with drop down guesses
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
    {
        type: "input",
        name: "github",
        message: "GitHub Name: "
    },
    {
        type: "input",
        name: "email",
        message: "email: "
    },
];

// function to write README file
function writeToFile(filename, readMeContents) {

    // Write the file, named ReadMe.md, with the ReadMe Contents
    writeNewFile("ReadMe.md", readMeContents)
        // Notify that the readme is written
        .then(() => console.log("Your new ReadMe is Ready"))
        // Catch the errors
        .catch((err) => console.log(err));
    // Return the function
    return writeNewFile("ReadMe.md", readMeContents)
}

// function to initialize the program
function init() {
    // Using Inquirer 
    inquirer
        // Prompt the questions
        .prompt(questions)
        // function to send data from questions to the Generate Markdown js file
        .then(function getMarkdown(data) {

            // Set the return from getMarkdown function to a variable
            readMeContents = generateMarkdown(data)

            // Invoke the WriteToFile function
            writeToFile(filename, readMeContents)
        })
        // Catch the errors!
        .catch((err) => console.log(err));

    // End of Init Function
}

// Calling the Init function to start the Generator
init();
