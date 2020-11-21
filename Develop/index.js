//import inquirer
let inquirer = require("inquirer");

//import fs
let fs = require("fs");

//import markdown
let generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  //title
  {
    type: "input",
    name: "title",
    message: "What is the title of your project ",
  },
    //Live Link
    {
      type: "input",
      name: "liveLink",
      message: "What is the live link to your project? ",
    },
     //Live Link
     {
      type: "input",
      name: "projectImage",
      message: "What is the file name of your image (make sure its in the projectImage folder)? ",
    },
  //description
  {
    type: "input",
    name: "description",
    message: "What is description of your project ",
  },
  // installation
  {
    type: "input",
    name: "installation",
    message: "What installation details should the user know?",
  },
  //usage
  {
    type: "input",
    name: "usage",
    message: "What should the user know about using your project?",
  },
  //liscense (dropdown)
  {
    type: "list",
    name: "license",
    message: "Choose a project license",
    choices: ["MIT", "Apache License 2.0", "GNU GPLv3", "ISC "],
  },
  //contributions
  {
    type: "input",
    name: "contributions",
    message: "What are your contribution guidelines for this project?",
  },
  //tests
  {
    type: "input",
    name: "tests",
    message: "What are your testing guidelines for this project?",
  },
  //notes on how to contact me 
  {
    type: "input",
    name: "contact",
    message: "What notes should the user have in regards to contacting you?",
  },
  //email
  {
    type: "input",
    name: "email",
    message: "What's your contact email address?",
  },
  //get github UserName
  {
    type: "input",
    name: "gitHubUserName",
    message: "What is your Github Username",
  },

  //get github url
  {
    type: "input",
    name: "gitHubUrl",
    message: "What is your Github profile URL (include https://) ",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  let markdown = generateMarkdown(data);
  fs.writeFileSync("README.md", markdown);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// function call to initialize program
init()
