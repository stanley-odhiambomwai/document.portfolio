function Name(name){
  console.log(name)
}
Name('John Wick')


//addition
function addNumbers(num1,num2){
 return  num1+num2;
}
console.log(addNumbers(3,4))
//end of additon

//multiple
function multiplyNumbers(num1,num2){
  return num1*num2;
}
console.log(multiplyNumbers(4,3));
//end of multiple

//odd or even
function oddOrEven(x) {
  if(x%2=== 0) {
   return console.log('Even');
  } else{
   return console.log('Odd');
  }
}

oddOrEven(7)
oddOrEven(2)
//end of odd or even

//prime
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
//end of prime

//printing the arrays individually using function method
function printArrayElements(Array) {
  Array.forEach((element) => {
    console.log(element);
  });
}
const myArray = [0, 2, 4, 7];
printArrayElements(myArray);

//EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL)
//console.log(document.title)
//document.title = 123;

//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[40]);
//console.log(document.forms[0])
//console.log(document.links)
//console.log(document.images);

//GETELEMTBYID
//console.log(document.getElementById('About'))
//console.log(document.getElementById('Work'))
//console.log(document.getElementById('Resume'))
//console.log(document.getElementById('Contact'))
//console.log(document.getElementById('Footer'))