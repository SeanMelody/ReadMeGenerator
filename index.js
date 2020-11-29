const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util");
// const generateMarkdown = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown");

// data = {}

// const theMarkdown = require("./utils/generateMarkdown");

// const generateTheMarkdown = require("./utils/generateMarkdown.js");
// const writeTheFile = util.promisify(fs.writeFile);

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
function writeToFile(ReadMe, data) {
    // console.log(data)

    // writeTheFile("ReadMe.md", data)
    // .then(console.log("ReadMeWritten"))
    // .catch((err) => console.log(err));
    // .then(() => console.log("ReadMe Written"))
    return writeToFile(ReadMe, data)
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)

        // .then(function generateMarkdown(data) {

        //     console.log(data)
        // })

        .then(function getMarkdown(data) {
            console.log(data)


            generateMarkdown(data)
        })
        // .then
        // .then(writeToFile())
        // .then(function generateMarkdown() {

        // })
        .catch((err) => console.log(err));


    // .then(console.log("All Done"))
    // .then(console.log("Done"))
    //     .then({ data }) => {
    //     const data = generateMarkdown(questions)
    // }
    //     const name = "example"
    //     )
    //     writeToFile(name, data)

}

// writeToFile()
// .then(console.log("ReadMe written"))
// function call to initialize program
init();
