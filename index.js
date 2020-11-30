const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
const writeNewFile = util.promisify(fs.writeFile);
let readMeContents = ""
let filename = "test.txt"


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

function writeToFile(filename, readMeContents) {


    writeNewFile("ReadMe.md", readMeContents)
        .then(() => console.log("ReadMeWritten"))
        .catch((err) => console.log(err));
    return writeNewFile("ReadMe.md", readMeContents)
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)

        .then(function getMarkdown(data) {
            // console.log(data)
            // generateMarkdown(data)
            // console.log(generateMarkdown(data))

            readMeContents = generateMarkdown(data)

            writeToFile(filename, readMeContents)

        })

        .catch((err) => console.log(err));

}
init();
