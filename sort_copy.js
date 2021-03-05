
var testArray = [{ 'name': 'jai', 'age': 26 },
    { 'name': 'shiv', 'age': 22 },
    { 'name': 'Anuj', 'age': 5 },
    { 'name': 'Tom', 'age': 20 },
    { 'name': 'Jerry', 'age': 20 }
];
 let res = testArray.filter((person) => {
 });
 res();


 const sortt = testArray.sort((a, b) => {
     return a.age - b.age;
 })

 console.log(sortt);

//coping objects/Array

const data = { id: 1, name: 'vikas', address: { flatNo: 23 } };
const clone = {...data };

clone.name = 'xyz';
console.log(data);
console.log(clone);

