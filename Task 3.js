function wrapper(a){
  
   return function(b){
     return a+b
   }
   
 }
 
 let sum=wrapper(5)
 console.log(sum(1))