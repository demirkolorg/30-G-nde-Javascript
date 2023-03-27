
//**************************************************** */
//! Higher Order Function
//! Callback

const karesiniAl = number => number ** 2

function kubunuAl(kare, number) {
  return kare(number) * number
}
console.log(kubunuAl(karesiniAl, 3));

//**************************************************** */
//! Returning function

const a = s1 => {
  const b = s2 => {
    const c = s3 => {
      return s1 + s2 + s3;
    }
    return c
  }
  return b
}
console.log(a(10)(20)(30));



//**************************************************** */
//! setInterval

function sayHello1() {
  console.log('Hello')
}

const interval = setInterval(sayHello1, 1000) // iinterval tanımlama

//interval iptal etme
setTimeout(() => {
  clearInterval(interval)
  console.log('interval işlemi iptal edildi.');
}, 5000)

//**************************************************** */
//! setTimeout

function sayHello2() {
  console.log('Hello World')
}

const timeout = setTimeout(sayHello2, 2000) // it prints hello after it waits for 2 seconds.

//timeout iptal etme
setTimeout(() => {
  clearTimeout(timeout)
  console.log('timeout işlemi iptal edildi.');
}, 5000)


//**************************************************** */
//! Functional Programming
//! forEach

const numbers = [1, 3, 5, 7, 9]
let toplam = 0
numbers.forEach(number => toplam += number)
console.log(toplam);

numbers.forEach(function (element, index) {
  console.log('İNDEX : ', index, ' ELEMENT : ', element)
})

//**************************************************** */
//! map
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)




//**************************************************** */
//! filter

const countriesHaveFiveLetters = countries.filter((country) => country.length === 5)
console.log(countriesHaveFiveLetters)

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 60 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)


//**************************************************** */
//! reduce

const sum = numbers.reduce((old, current) => old + current, 0)
console.log(sum);

//**************************************************** */
//! every

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)


//**************************************************** */
//! some

const bools = [false, true, true, true]
const areSomeTrue = bools.some((b) => b === false) // elemanlardan en az biri şarta uyuyorsa true hiç yoksa false
console.log(areSomeTrue) //true

//**************************************************** */
//! find

const ages = [24, 40, 6, 22, 25, 5, 32, 35, 18]
const age = ages.find((age) => age < 20) //koşula ilk uyan elemanı döndürür
console.log(age)

//**************************************************** */
//!findIndex

const age2 = ages.findIndex((age) => age < 20) //koşula uyan indexi döndürüyor
console.log(age2) // 5


//**************************************************** */
//! sort

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
console.log(ages.sort()) // sayıları stringe çevirip sıralıyor yanlış sıralama veriiyor

sortAges=ages.sort((a,b)=>a-b)
console.log("sortAges : ",sortAges);

sortAgesTers=ages.sort((a,b)=>b-a)
console.log("sortAgesTers : ",sortAgesTers);

sortProducts=products.sort((a,b)=>a.localeCompare(b))
console.log("sortProducts : ",sortProducts);

sortProductsTers=products.sort((a,b)=>b.localeCompare(a))
console.log("sortProductsTers : ",sortProductsTers);
//**************************************************** */
//!

//**************************************************** */
//!

//**************************************************** */
//!

//**************************************************** */
//!

//**************************************************** */
//! 



