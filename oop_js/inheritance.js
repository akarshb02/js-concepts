class base {


  constructor(name, email) {
    this.name = name;
    this.email = email;
  }


  #courseList = []

  getInfo() {
    return { name: this.name, email: this.email };

  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourse() {
    return this.#courseList
  }
}
class another extends base {


  constructor(name, email) {
    super(name, email)
  }


  getChild() {
    super.getCourse()
    console.log('child class');
  }
  getInfo() {

    console.log('subclass');
  }
}

const rock = new another('abc', 'akarsh226@gmail.com')
console.log(rock.getInfo());
console.log(rock.getCourse());
console.log(rock.getChild());

let fruits = ['a', 'b', 'c']
let arr = []
for (var i = 0;i < fruits.length;i++) {
  arr.push(fruits[i])
}
console.log(arr);

fruits.shift()

console.log(fruits);

fruits.unshift('newdata')
console.log(fruits);


class Emp {
  setEmpDetails(name, id, phoneNO) {
    this.name = name;
    this.id = id;
    this.phoneNO = phoneNO
  }

  getEmpName() {
    return this.name;
  }
}
let emp = new Emp();

console.log(emp.setEmpDetails('akarsh'))
console.log(emp.getEmpName())
