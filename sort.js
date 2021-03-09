// sort all the records in ascending order of their age


var testArray = [{ 'name': 'jai', 'age': 26 },
    { 'name': 'shiv', 'age': 22 },
    { 'name': 'Anuj', 'age': 5 },
    { 'name': 'Tom', 'age': 20 },
    { 'name': 'Jerry', 'age': 20 }
];



const ageSort = testArray.sort((a, b) => {
      
        return a.age - b.age;
 })
 console.log(ageSort);
