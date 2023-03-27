//**************************************************** */
//! 

console.log("apolas")

console.log("apolas","demirkol");

const person={
  name:'Apolas',
  surname:'demirkol',
  age:30,
  skilss:{
    html:'10/10',
    CSS:'7/10',
    JS:'5/10'
  },
  hobies:["reading","writing","footbal"]
}

console.log(person);

console.warn("uyarı mesajı");
console.error(" hatat Mesaj");
console.info(person)
console.table(person)
console.time("2017")
console.log(person)
console.timeEnd("2017")
console.assert(5>6,'5 sayısı 6 dan büyük değil')





//**************************************************** */
//! console.group()

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()




//**************************************************** */
//! console.count()

const func = () => {
  console.count('Function has been called')
}
func()
func()
func()
func()






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


