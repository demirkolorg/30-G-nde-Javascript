
//**************************************************** */
//! Function Örnek 1
function sayHello(){
console.log('Merhaba');
}
sayHello()


//! Function Örnek 2
function topla(num1,num2){
  return num1 + num2;
}
console.log(topla(10,50));


//! Function Örnek 3
let sayilar=[1,2,3,4,5]
function topla2(array){
  let toplam=0
  for(let i of array){
    toplam+=i
  }
  return toplam
}
console.log(topla2(sayilar));



//! Function Örnek 4
function cemberinAlani(r) {
  let area = Math.PI * r * r
  return area
}
console.log(cemberinAlani(10)) 




//**************************************************** */
//! Anonymous Function
const merhaba=function(name){
  console.log(`Merhaba ${name}`);
}
merhaba("abdullah")



//**************************************************** */
//! Expression Function
const square = function(n) {
  return n * n
}
console.log(square(2));



//**************************************************** */
//! Self Invoking Functions
(function(n){
  console.log(n*n);
})(5)

//! Self Invoking Functions 2
let tayfun=(function(n){
  console.log(n*n);
})(10)


//**************************************************** */
//! Arrow Function 1
const kareAl=n=>{
  console.log(n*n);
}
kareAl(8)

//! Arrow Function 2
const printFullName = (firstName, lastName) => {
  return `Merhaba ${firstName} ${lastName}`
}

console.log(printFullName('Abdullah', 'DEMİRKOL'))

//**************************************************** */
//! REST
let restDeneme=(num1,num2,num3, ... other)=>{
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(other);
}
restDeneme(10,11,12,13,14,15,16,17,18,19)

//**************************************************** */
//! 



//**************************************************** */
//! 



//**************************************************** */
//! 


