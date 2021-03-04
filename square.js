 function square(r) {
     this.area = function() {
         return r * r;
         }                                //area is not a function
 }

 var x = new square(2);
 area();
