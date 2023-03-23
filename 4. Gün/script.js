let name='Abdullah',
    surname='DEMİRKOL',
    age=30,
    sex='Male'

//**************************************************** */
//! If

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

//**************************************************** */
//! If Else

let num1 = -3
if (num1 > 0) {
  console.log(`${num1} is a positive number`)
} else {
  console.log(`${num1} is a negative number`)
}
//  -3 is a negative number


//**************************************************** */
//! If Else if Else

// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

if(name==='Apolas'&&surname==='DEMİRKOL'){
  console.log(`Evet Doğru => Adım ve Soyadım : ${name} ${surname}`) ;
} else if (age===30){
console.log(`Evet doğru => Yaşım : ${age}`);
}else{
  console.log("Hiçbiri doğru değil");
}

//**************************************************** */
//!Switch

let weather1 = 'cloudy'
switch (weather1) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

switch (age) {
  case 29:
    console.log("yaş 29");
    break;
  case 30:
    console.log("yaş 30");
  default:
    console.log("yaş bu aralıkta değil");
    break;
}

//**************************************************** */
//!Ternary Operators

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
  
//**************************************************** */
//!