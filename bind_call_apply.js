let obj1 = {
    name: 'abc',
    getName: function(methods) {
        console.log(this.name, methods);
    }
}

let obj2 = {
    name: 'bind'
}

let obj3 = {
    name: 'call'
}

let obj4 = {
    name: 'apply'
}

const reff = obj1.getName.bind(obj2, 'Binging');
obj1.getName.call(obj3, 'Call method');
obj1.getName.apply(obj4, ['Apply method']);

obj1.getName('object arg');
reff();
