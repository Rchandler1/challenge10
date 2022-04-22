function Employee(name) {
    this.name = name;

    if (this.name===name) {
        this.id = Math.floor(Math.random()*100000);
    } else{
        this.id = 0
    }
console.log(this.id)
}


module.exports = Employee