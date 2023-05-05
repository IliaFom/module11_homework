
function test_prime(n) {
   if (n<=1000){
     if (n===1 || n===0)
     {
       return `Число не является ни простым ни сложным`;
     }
     else if(n === 2)
     {
       return `Число простое`;
     } else {
       for(let x = 2; x < n; x++) {
         if(n % x === 0)
         {
           return `Число сложное`;
         }
       }
       return `Число простое`;  
     }
   }
  return `Данные неверны`
 
}

console.log(test_prime(1002));