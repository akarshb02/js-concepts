function sum() {
    const num = [1, 2, 3, 4, 5];
    const res = num.reduce((Acc, current) => { //15

        return Acc + current;
    })

    let product = num.reduce((total, next) => {

        return total * next                         
    });


    console.log(res);
    console.log(product);
}


sum();
