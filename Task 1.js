
let myArr=[1, 4, 5, 0, null, 0, 'some text', 2, 20, BigInt, Boolean, 'more text', 'hello']

let zeroCount=0
let evenCount=0
let oddCount=0
let notNumberCount=0
      
      
function arrayCount(arr){
  for (let i=0; i<arr.length; i++){
    if (typeof arr[i] !=='number') {
      notNumberCount++;
      console.log(arr[i]) 
    }
    else if (arr[i]===0){
      zeroCount++;
      console.log(arr[i])
    }
    else if (arr[i]%2==1){
      oddCount++
      console.log(arr[i])
    }
    else{
      evenCount++
      console.log(arr[i])
    }
  }

  return `Нечисловых элементов: ${notNumberCount}; Количество нулей(0): ${zeroCount}; Количество нечетных чисел: ${oddCount}; Количество четных чисел: ${evenCount}`
}

console.log(arrayCount(myArr))