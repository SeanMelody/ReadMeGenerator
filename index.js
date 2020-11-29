const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util");
// const generateMarkdown = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown");
let readMeContents = ""

// data = {}

// const theMarkdown = require("./utils/generateMarkdown");

// const generateTheMarkdown = require("./utils/generateMarkdown.js");
const writeNewFile = util.promisify(fs.writeFile);

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

// function writeToFile() {
//     // console.log(generateMarkdown)

//     // console.log("Write to file")
//     writeNewFile("ReadMe.md", readMeContents)
//         .then(() => console.log("ReadMeWritten"))
//         .catch((err) => console.log(err));
//     return writeNewFile("ReadMe.md", readMeContents)
//     console.log(readMeContents)

// writeTheFile("ReadMe.md", generateMarkdown())
// .then(console.log("ReadMeWritten"))
// .catch((err) => console.log(err));
// .then(() => console.log("ReadMe Written"))

// writeNewFile("ReadMe.md", ReadMe)
//     .then(() => console.log("ReadMeWritten"))
//     .catch((err) => console.log(err));
// return writeNewFile("ReadMe.md", ReadMe)
// }

// function to initialize program
function init() {
    inquirer
        .prompt(questions)

        // .then(function generateMarkdown(data) {

        //     console.log(data)
        // })

        .then(function getMarkdown(data) {
            console.log(data)


            // generateMarkdown(data)


            // console.log(generateMarkdown(data))

            readMeContents = generateMarkdown(data)
            console.log(readMeContents)


            const writeNewFile = util.promisify(fs.writeFile);
            writeNewFile("ReadMe.md", readMeContents)
                .then(() => console.log("ReadMeWritten"))
                .catch((err) => console.log(err));
            return writeNewFile("ReadMe.md", readMeContents)

            // .then()=> writeToFile(readMeContents))
            // .then(writeToFile())
        })



        // .then(function writeToFile(filename, contents) {
        //     writeNewFile("ReadMe.md", readMeContents)
        //         .then(() => console.log("ReadMeWritten"))
        //         .catch((err) => console.log(err));
        //     return writeToFile("ReadMe.md", readMeContents)


        // })

        // .then(writeToFile(generateMarkdown(data)))
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
