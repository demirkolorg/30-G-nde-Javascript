

//**************************************************** */
//! set


const company = new Set()
console.log(company)

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}


//**************************************************** */
//! Adding an element to a set

const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Facebook')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)




//**************************************************** */
//! Deleting an element a set

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set
console.log(companies)




//**************************************************** */
//! Checking an element in the set

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true




//**************************************************** */
//! Union of sets

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log("a : ",a);
console.log("b : ",b);
console.log("c : ",c);
console.log("birleşim : ",C)




//**************************************************** */
//! Intersection of sets


let d = a.filter((num) => B.has(num))
let D = new Set(d)

console.log("kesişim : ",D)




//**************************************************** */
//! Difference of sets 



let e = a.filter((num) => !B.has(num)) // A fark B
let E = new Set(e)

console.log("a fark b : ",E)


let f= b.filter((num) => !A.has(num)) // b fark a
let F = new Set(f)

console.log("b fark a : ",F)



//**************************************************** */
//! Creating an empty Map -- MAP

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log("countries map",map)
console.log("countries map.size: ",map.size)

//**************************************************** */
//! Adding values to the Map

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size);


[... countriesMap].forEach(([key,val] )=> {
 console.log(key,val); 
});


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





//**************************************************** */
//! 





//**************************************************** */
//! 





//**************************************************** */
//! 



