function Manager(name){
    this.name =name;

    if (this.name ===name){
        this.role = 'manager'
        this.officeNumber = 100
    }
}

module.exports = Manager