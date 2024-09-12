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
function oddOrEven(number) {
  if(number%2=== 0) {
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
function printArrayElements(array) {
  Array.forEach((element) => {
    console.log(element);
  });
}
const myArray = [0, 2, 4, 7];
//printArrayElements(myArray);

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

//gimli = {
  //name: "Gimli",
  //race: "dwarf",
  //weapon: "axe",
  //greet: function() {
   //   return `Hi, my name is ${this.name}!`;
 // },
//};

//console.log(gimli.greet());
//console.log(gimli.weapon);
//console.log(gimli['weapon']);

//var gimli = {
  //name: "Gimli",
  //race: "dwarf",
  //weapon: "axe",
  //greet: function() {
    //  return `Hi, my name is ${this.name}!`;
  //},
//};

//gimli.age = 139;

//gimli.fight = function() {
  //return `Gimli attacks with an ${this.weapon}.`;
//}

//console.log(gimli)



function hasPrimeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
const exampleArray = [0, 2, 4, 7];
console.log(hasPrimeNumbers(exampleArray));

//console.dir(document);
//console.log(document.URL)
//console.log(document.domain)
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
//console.log(document.all[10])
//console.log(document.forms[0])
//console.log(document.links)

//console.log(document.images);

//getElementById
//console.log(document.getElementById('About'))
//console.log(document.getElementById('work'))
//console.log(document.getElementById('Resume'))
//console.log(document.getElementById('cloths'))
//let About = document.getElementById('About')
//let About = document.getElementById('About')
//console.log(About)
//About.textContent = 'nature';
//About.innertext = 'interesting'
//console.log(About.inneText);
//About.innerHTML = '<h3> hello</h3>'
//Header.style.boderBottom = 'solid 4px #000'

//GETELEMENTBYCLSSNAME
//let about = document.getElementsByClassName('container')
//console.log(about)
//console.log(about[1])
//about[1].textContent = 'hellow world';
//about[1].style.fontweight = 'bold'
//about[1].Style.backgroundColor = 'red'

//gives error
//about.style.backgroundColor = 'violet'

//for(let i = 0; i < about.length;i++){
 // about[1].style.backgroundColor = 'violet'
//}
//let about = document.getElementsByTagName('container')
//console.log(h1)
//console.log(h1[1])
//h1[1].textContent = 'hellow world';
//h1[1].style.fontweight = 'bold'
//h1[1].Style.backgroundColor = 'red'

//for(let i = 0; i < h1.length;i++){
   //h1[1].style.backgroundColor = 'violet'}

   //quaryselector
   //let body  = document.querySelector(' ')
   let num = 3
   let num2 = 5
   num--
   num2++
   let sum = num + num2
   let result = sum**2
   console.log(result)
