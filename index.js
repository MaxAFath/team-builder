//packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const validator = require('email-validator');
const isNumber = require('is-number');

const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var team = [];//array of the team
var idArray = [];
var teamBuild = true;//while true will continue to add members to team

addManager();//start of application

function addManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Manager name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Enter the manager name');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter manager email',
            validate: answerInput => {
                if (validator.validate(answerInput)) {
                    return true;
                }
                else {
                    console.log("enter a valid email");
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'office',
            message: "What is manager's office number?",
            validate: answerInput => {
                if (isNumber(answerInput)) {
                    return true;
                }
                else {
                    console.log('Enter a number');
                    return false;
                }
            }

        }, {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID number?",
            validate: answer => {
                if (isNumber(answer)) {
                    return true;
                }
                else {
                    console.log('Enter a ID number');
                    return false;
                }
            }
        }
    ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerEmail, answers.office, answers.id)
            team.push(manager);
            idArray.push(answers.id);

        }
        );
}

function buildTeam() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'member',
            choices: ['Engineer', 'Intern', 'team is complete']
        }
    ])
        .then(answer => {
            if (answer === 'Engineer') {
                addEngineer();
            }
            else if (answer === 'Intern') {
                addIntern();
            }
            else {
                teamBuilt();
            }
        })
}

function addEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer name',
        }, {
            type: 'input',
            name: 'email',
            message: "Enter engineer's email",
            validate: answerInput => {
                if (validator.validate(answerInput)) {
                    return true;
                }
                else {
                    console.log("enter a valid email");
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID number',
            validate: answer => {
                if (isTaken(answer)) {
                    console.log("That ID is already taken");
                    return false;
                }
                else {
                    return true;
                }
            }
        }, {
            type: 'input',
            name: 'github',
            message: 'what is the engineers github account?'
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.email, answers.id, answers.github);
        team.push(engineer);
        idArray.push(answers.id);
        buildTeam();
    });
}

function addIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Intern name'
        },{
            type:'input',
            name:'email',
            message:'enter employee email',
            validate: answerInput => {
                if (validator.validate(answerInput)) {
                    return true;
                }
                else {
                    console.log("enter a valid email");
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'id',
            message: 'What is the Employee ID',
            validate: answer => {
                if (isTaken(answer)) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }, {
            type:'input',
            name:'school',
            message:'What school does the intern go to?'
        }
    ]).then(answers =>{
        const intern =  new Intern(answers.name, answers.email, answers.id, answers.school);
        team.push(intern);
        idArray.push(answers.id);
        buildTeam();
    }
    )
}

function isTaken(id) {
    for (let i = 0; i < idArray.length; i++) {
        if (id == idArray[i]) {
            return true;
        }
        else {
            return false;
        }
    }
}