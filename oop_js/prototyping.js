let EmpDetails = function(name, age) {
    this.name = name;
    this.age = age;


    this.getName = function() {
        return this.name;
    }
}
EmpDetails.prototype.getAge = function() {
    console.log(`age is:${this.age}`);
}

let emp1 = new EmpDetails('xyz')
console.log(emp1.getName());

let emp2 = new EmpDetails('', 5)

console.log(emp2.getAge());
