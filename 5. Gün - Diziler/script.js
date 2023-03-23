//**************************************************** */
//! Arrays

const arr1 = Array()
let arr2 = new Array()
const arr3 = []
let arr4 = []

console.log(arr1) // []
console.log(arr2) // []
console.log(arr3) // []
console.log(arr4) // []


const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Türkiye', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

//**************************************************** */
//! Array can have items of different data types

const apolas = [
  'Abdullah',
  30,
  true,
  { country: 'Türkiye', city: 'Van' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(apolas)


//**************************************************** */
//! Creating an array using split

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

//**************************************************** */
//! Accessing array items using index
const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits2[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits2[1]
console.log(secondFruit) // orange

let lastFruit = fruits2[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex2 = fruits2.length - 1
lastFruit = fruits2[lastIndex2]

console.log(lastFruit)  // lemon

const countries2 = [
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
  'Kenya'
] // List of countries

console.log(countries2)      // -> all countries in array
console.log(countries2[0])   //  -> Albania
console.log(countries2[10])  //  -> Kenya

let lastIndex3 = countries2.length - 1;
console.log(countries2[lastIndex2]) //  -> Kenya

//**************************************************** */
//! Modifying array element
const numbers4 = [1, 2, 3, 4, 5]
numbers4[0] = 10      // changing 1 at index 0 to 10
numbers4[1] = 20      // changing  2 at index 1 to 20

console.log(numbers4) // [10, 20, 3, 4, 5]

const countries4 = [
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
  'Kenya'
]

countries4[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries4.length - 1
countries4[lastIndex] = 'Korea' // Replacing Kenya by Korea

console.log(countries4)


//**************************************************** */
//! Creating static values with fill

const arr = Array() // creates an an empty array
console.log(arr)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]


//**************************************************** */
//! Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log("iki listeyi birbirine bağladık : ",thirdList) // [1, 2, 3, 4, 5, 6]


//**************************************************** */
//! Getting array length

const numbers7 = [1, 2, 3, 4, 5]
console.log(numbers7.length) // -> 5 is the size of the array

//**************************************************** */
//! Getting index an element in arr array
const numbers8 = [1, 2, 3, 4, 5]

console.log(numbers8.indexOf(5)) // -> 4
console.log(numbers8.indexOf(0)) // -> -1
console.log(numbers8.indexOf(1)) // -> 0
console.log(numbers8.indexOf(6)) // -> -1


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


