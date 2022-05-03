const employee = require("./employee");
class Manager extends employee{
    constructor(name, email, id){
        super(office);
        this.name = name;
        this.email = email;
        this.id = id;
        this.office = office;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports=Manager;