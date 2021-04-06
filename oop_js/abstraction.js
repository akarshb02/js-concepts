function Emp(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary


    let monthlyBonous = 1000; //abstrction


    let calculateFinal = function() { //abstrction
        let finalSalary = baseSalary + monthlyBonous;
        console.log(finalSalary);

    }


    this.getEmpDetails = function() {
        console.log('Name ' + this.name + '| + Age : ' + this.age);
        calculateFinal()
    }
}
let e = new Emp('a', 18, 4000)
e.monthlyBonous = 3000; //cann't be edited implementation will be abstract outside
e.getEmpDetails();

// e.calculateFinal();
