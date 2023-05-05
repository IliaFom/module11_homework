let between = function(x,y){
   let timerid = setInterval(function(){
     console.log(x)
     x++
     if (x>y){
       clearInterval(timerid)
     }}, 1000)
 }
 
 between(5,15)