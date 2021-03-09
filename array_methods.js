var testArray = [{ 'name': 'jai', 'age': 26 },
    { 'name': 'shiv', 'age': 22 },
    { 'name': 'Anuj', 'age': 5 },
    { 'name': 'Tom', 'age': 20 },
    { 'name': 'Jerry', 'age': 20 }
];

//Retrieve a record whose age is 20 also name is 'TOM'
//Retrive all records whose age is more than 20

const name = testArray.filter(personName => {

    if (personName.name == 'Tom' && personName.age == 20) {
        return personName.name == 'Tom';
    } else if (personName.age > 20) {

        return personName;
    }
})
console.log(name);
