// TODO: Include packages needed for this application
fs = require('fs')
const { write } = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'GitHub Username:',
        validate: UserName => {
            if (UserName) {
              return true;
            } else {
              console.log('Please enter your Username!');
              return false;
            }
         }
    },
    {
        type: 'input',
        name:'email',
        message: 'Email Address:',
        validate: emailAddress => {
            if (emailAddress) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
         }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Projects Name:',
        validate: projectName => {
            if (projectName) {
              return true;
            } else {
              console.log('Please enter your Project Name!');
              return false;
            }
         }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please write a short description of your project:',
        validate: description => {
            if (description) {
              return true;
            } else {
              console.log('Please enter project Description!');
              return false;
            }
         }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of License should your project have?',
        choices: ['MIT','APACHE 2.0','GPL 3.0', 'BSD 3','None']
    },
    {
        type: 'input',
        name: 'command',
        message: 'What command line should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'ntk',
        message: 'What does the user need to know about using this Repo?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about Contributing to the Repo'
    }
]

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve,reject)=>{
        fs.writeFile('./dist/README.md', data, err =>{
            if (err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Readme Created!'
            });
        }) ;
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
    
}

// Function call to initialize app
init()
   .then(readmeData => {
    return generateMarkdown(readmeData);
   })
   .then(markdownData =>{
    return writeToFile(markdownData);
    
   })