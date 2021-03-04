 var text = 'outside';

 function logIt() {

     console.log(text);                                    //undefined
     var text = ' inside';
 };

 logIt();
