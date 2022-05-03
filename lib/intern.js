const employee = require('./employee');

class Intern{
    constructor(name, email, id){
        super(school);
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
    
}

module.exports = Intern;