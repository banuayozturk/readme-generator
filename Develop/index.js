
//Code for Importing Methods and Utilities
const generateReadme = require("./utils/generateMarkdown")
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

//Code to Prompt the User Questions 
function userData(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the functionality of the project?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the license type for this project: ",
            choices: [
                "Apache License",
                "GPL License",
                "Mozzilla Public",
                "Public Domain",
                "LGPL",
                "Mozilla Public",
                "Eclipse Public"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors of the project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What should I do if I have questions about the project? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function  that returns the promise using util.promisify 
  async function init() {
    try {
        // Gets user answer to questions
        const answers = await userData();
        const generateContent = generateReadme(answers);

        // Writes answers to output.md
        await writeFileAsync('output.md', generateContent);
        console.log('README.md successfully written!');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  