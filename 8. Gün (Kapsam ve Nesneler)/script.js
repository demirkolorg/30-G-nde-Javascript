
//**************************************************** */
//! Window Global Object
//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible



//**************************************************** */
//! Global scope
{
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
}



//**************************************************** */
//! Local scope

{
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
}



//**************************************************** */
//! Object

const person = {
  firstName: 'Abdullah',
  lastName: 'Demirkol',
  age: 30,
  country: 'Türkiye',
  city: 'Van',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  getAddress: function() {
    return `${this.city} ${this.country}`
  }

}

person.title = 'teacher'
person.skills.push('C','Angular')
person.skills.push('C#','Svelte')

const formatter = new Intl.ListFormat('tr', { style: 'long', type: 'conjunction' });



person.getPersonInfo = function() {
  // let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
  // // let lastSkill = this.skills.splice(this.skills.length - 1)[0] //son elemanı alıyoruz
  // let lastSkill = this.skills.at(-1) //son elemanı alıyoruz
  // let skills = `${skillsWithoutLastSkill} ve ${lastSkill}`
  
  let skills=formatter.format(this.skills) // yukarıda yapılan işlemi tek kodla yapılıyor.

  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}

console.log(person)
console.log(person.getPersonInfo())

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['location']) // undefined
console.log(person['phone number'])
console.log(person.getFullName())








//**************************************************** */
//! Object Methods

const copyPerson = Object.assign({}, person) // kopyalanan objeyi bozmadan kopyalamamıza yarıyor
console.log(copyPerson)
const newUser={... copyPerson} // kopyalanan objeyi bozmadan kopyalamamıza yarıyor
console.log(newUser)




//**************************************************** */
//! Getting object keys using Object.keys() and Object.values()

const keys = Object.keys(copyPerson)
console.log(keys) 

const values = Object.values(copyPerson)
console.log(values)



//**************************************************** */
//! Getting object keys and values using Object.entries()

for (let [key,val] of Object.entries(person)) {
  console.log(key,' : ',val);
}



//**************************************************** */
//! Checking properties using hasOwnProperty()

console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))


//**************************************************** */
//! Object.freeze()

console.log(person.getFullName());
// Object.freeze(person) //objeyi donduruyor herhangi bir değişikliğe izin vermiyor

person.firstName='Ayşenur'
console.log(person.getFullName());



//**************************************************** */
//! Object.seal()

console.log(person.getFullName());
Object.seal(person) //objeye ekleme silme yapılamıyor, sadece mevcut veriyi düzenlemeye izin veriyor

person.firstName='Asya Hilal'
person.takim='FB'
console.log(person.takim);
console.log(person.getFullName());




//**************************************************** */
//! 

