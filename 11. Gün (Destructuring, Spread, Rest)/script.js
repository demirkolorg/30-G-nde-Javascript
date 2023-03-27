

//**************************************************** */
//! Destructing Arrays = Yıkım, dizileri ve nesneleri açmanın ve farklı bir değişkene atamanın bir yoludur.

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)




const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
const [[birLang,ikiLang,,dortLang], [onLeng,yirmiLang,otuzLang]] = fullStack

console.log("frontEnd : ",frontEnd)
console.log("frontEnd : ",backEnd)


console.log("birLang : ",birLang)
console.log("onLeng : ",onLeng)

console.log("dortLang : ",dortLang)
console.log("otuzLang : ",otuzLang)



//**************************************************** */
//! ...REST

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log("rest : ",rest)





//********************Destructuring during iteration
//! Destructuring during iteration

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log("Ülke : ",country, " , Şehir : ",city)
}






//**************************************************** */
//! Destructuring Object =Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır. Aşağıdaki örneğe bakın.

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width:genislik, height:yukseklik, area:alan, perimeter:parametre } = rectangle


// console.log(width, height, area, perimeter)
console.log(genislik, yukseklik, alan, parametre) //perimeter undefined






//**************************************************** */
//! Object parameter without destructuring

// Without destructuring
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log("calculatePerimeter(rect) : ",calculatePerimeter(rect)) // 60
//with destructuring






//**************************************************** */
//! Object parameter with destructuring



const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height)
}

console.log("calculatePerimeter2(rect) : ",calculatePerimeter2(rect)); // 60





//**************************************************** */
//! Spread or Rest Operator

const countries2 = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries2

console.log(gem)
console.log(fra)
console.log(nordicCountries)




//**************************************************** */
//! 






//**************************************************** */
//! 






//**************************************************** */
//! 






//**************************************************** */
//! 


