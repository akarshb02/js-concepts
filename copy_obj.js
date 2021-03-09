//Spread operator

const value = {
    val1: 'Bye',
    val2: 'Good'
}
let b = {...value }
b.val1 = 'Ciao'
console.log(value.val1)
console.log(b.val1)

//Object.assign


const obj = {
    val1: 'Bye',
    val2: 'Good'
}
let obj1 = Object.assign({}, obj)
obj1.val1 = 'Ciao'
console.log(obj1.val1)
console.log(obj.val1);


//nested array (json.stringify & json.parse)

const a = { id: 1, name: "vikas", address: { flatNo: 23 } }

const res = JSON.parse(JSON.stringify(a))
res.address.flatNo = 5;
res.id = 2;

console.log(a);
console.log(res);
