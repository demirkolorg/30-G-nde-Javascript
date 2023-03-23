
//**************************************************** */
//Booleans
let isLightOn = true
let isRaining0 = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
console.log(isHungry);

//**************************************************** */
//Undefined
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

//**************************************************** */
//Null
let empty = null
console.log(empty) // -> null , means no value

//**************************************************** */
// Assignment operators
let lastName = 'Demirkol'
let country = 'Finland'

//**************************************************** */
//Arithmetic Operators
let numOne = 10
let numTwo = 5
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(`sum:${sum}, diff:${diff}, mult:${mult}, div:${div}, remainder:${remainder}, powerOf:${powerOf}`) // 7,1,12,1.33,1, 64


//**************************************************** */
//Comparison Operators
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


//**************************************************** */
//Logical Operators
// && ampersand operator example AND
const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example OR
const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples
let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff1 = !isLightOn1           // false
let isMarried1 = !false                // true


//**************************************************** */
//Increment Operator
let count1 = 0
console.log(++count1)        // 1
console.log(count1)          // 1

let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1

//Increment Operator
let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1

let count4 = 0
console.log(count4--) // 0
console.log(count4)   // -1

//**************************************************** */
//Ternary Operators

let isRaining1 = true
isRaining2 = false

isRaining1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')



let number1 = 5
let number2 = -5

number1 > 0
  ? console.log(`${number1} is a positive number`)
  : console.log(`${number1} is a negative number`)

number2 > 0
  ? console.log(`${number2} is a positive number`)
  : console.log(`${number2} is a negative number`)

//**************************************************** */

//! Window alert() method
// alert('Welcome to 30DaysOfJavaScript')

//! Window prompt() method
// let numberPrompt = prompt('Enter number', 'number goes here')
// console.log(numberPrompt)

//! Window confirm() method
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box


//**************************************************** */
//! Date Object
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
console.log(now.getFullYear())
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day

console.log(now.getHours()) // 0, because the time is 00:56:41
console.log(now.getMinutes()) // 56, because the time is 00:56:41
console.log(now.getSeconds()) // 41, because the time is 00:56:41
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
console.log(Date.now()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

let year = now.getFullYear() // return year
let month = now.getMonth() + 1 // return month(0 - 11)
let date = now.getDate() // return date (1 - 31)
let hours = now.getHours() // return number (0 - 23)
let minutes = now.getMinutes() // return number (0 -59)
let seconds = now.getSeconds() // return number (0 -59)
let dayNumber = now.getDay() // return number (0 -59)

month<10?month='0'+month:month=month

console.log(`${date}.${month}.${year} ${hours}:${minutes}`) 

let aylar=[
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

let gunler=[
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
]

let okunabilirTarih=`${date} ${aylar[month-1]} ${year}, ${gunler[dayNumber]}, ${hours}:${minutes}:${seconds}`
console.log(okunabilirTarih);
