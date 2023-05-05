let power = (x,n) => {
   if (typeof x!=='number' || isNaN(x) || typeof n!=='number' || isNaN(n)) {
     return `Введены не числа`
   }
   else if(x>0 && n>0 && Math.floor(x)===x && Math.floor(n)===n) {
     return Math.pow(x,n)
   }
   else {
     return `Введенные числа не натуральные`
   }
 }
 console.log(power(2,5))