
//1st
const person = {
  firstName: 'testFirstName',
  lastName: 'testLastName'
};

//2nd
const person = new Object();
person.firstName = 'testFirstName';
person.lastName = 'testLastName';


//3rd
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

const personOne = new Person('testFirstNameOne', 'testLastNameOne');
const personTwo = new Person('testFirstNameTwo', 'testLastNameTwo');
