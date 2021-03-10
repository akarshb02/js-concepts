 function sum() 
 {
    var num1 = 2;
    var num2 = 3;
    return function() 
    {
         console.log(num1 + num2);
     }
 }
 var add = sum();
 add();
