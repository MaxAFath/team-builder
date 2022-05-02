//packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const validator = require('email-validator');
const isNumber = require('is-number');

var team = [];//array of the team
var teamBuild = true;//while true will continue to add members to team

function addManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Team lead name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Enter team lead name');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter lead email',
            validate: answerInput => {
                if(validator.validate(answerInput)){
                    return true;
                }
                else {
                    console.log("enter a valid email");
                    return false;
                }
            }
        }, {
            type:'input',
            name: 'office',
            message:"What is lead's office number?",
            validate: answerInput => {
                if (isNumber(answerInput)){
                    return true;
                }
                else {
                    console.log('Enter a number');
                    return false;
                }
            }
            
        }, {
            type:'input',
            name:'empId',
            message:"What is team lead's ID number?"
        }
    ]);
}
