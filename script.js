function Name(firstName,lastName){
  console.log(firstName + lastName)
}
Name('John','Wick')

function addNumbers(num1,num2){
  console.log( num1+num2);
}
addNumbers(3,4)

function multiplyNumbers(num1,num2){
  console.log(num1*num2);
}
multiplyNumbers(4,3)


function oddOrEven(x) {
  if(x%2=== 0) {
   return console.log('Even');
  } else{
   return console.log('Odd');
  }
}

oddOrEven(7)
oddOrEven(2)

function isPrime(num){
  if (num <=1) return console.log( false);
  for(let i = 2; i < num; i++){
    if (num % i ===0){
      return console.log(false);
    }
  }
  return console.log( true);
}
isPrime(7)
isPrime(4)