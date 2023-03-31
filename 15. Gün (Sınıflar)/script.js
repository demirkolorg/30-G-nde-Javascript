//**************************************************** */
//! Classes


class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.skills=[]
  }
  getFullName(){return this.firstName+' '+this.lastName}
  get getSkills(){ return this.skills}
  set setSkill(skill){this.skills.push(skill)}
  
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` ve ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `Bildiğim teknolojiler ise ; ${skills}` : ''

    let info = `Benim adım ${fullName} ve ${this.age} yaşındayım. Ben ${this.country} ülkesinin ${this.city} şehrinde yaşıyorum. ${formattedSkills}`
    return info
  }


  
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    if(month < 10) month= "0"+month;
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }


}

class KadinPerson extends Person{
  constructor(firstName, lastName, age, country, city,gender){
    super(firstName, lastName, age, country, city,gender)
    this.gender="Kadın"
  }
  
  getFullName(){return super.getFullName()+' ('+this.gender+')'}
}
class ErkekPerson extends Person{
  constructor(firstName, lastName, age, country, city,gender){
    super(firstName, lastName, age, country, city,gender)

    this.gender="Erkek"
  }
}

const person1 = new ErkekPerson('Abdullah', 'DEMİRKOL', 30, 'Türkiye', 'Van')
const person2 = new KadinPerson('Ayşenur', 'DEMİRKOL', 29, 'Türkiye', 'Van')
const person3 = new KadinPerson('Asya Hilal', 'DEMİRKOL', 2, 'Türkiye', 'Van')

console.warn(person1.getFullName());
person1.setSkill="HTML"
person1.setSkill="CSS"
console.warn(person1.getSkills);
console.warn(person1.getPersonInfo());


console.warn(person2.getFullName());
person2.setSkill="JS"
person2.setSkill="REACT"
console.warn(person2.getSkills);
console.warn(person2.getPersonInfo());


console.warn(person3.getFullName()); 
console.warn(person3.getPersonInfo());
console.warn(person3.getFullName());


console.warn(Person.showDateTime());


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



