
//**************************************************** */
//! for Loop
for(let i = 0; i <= 5; i++){
  console.log(i)
}

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr);



//**************************************************** */
//! while loop

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}




//**************************************************** */
//! do while loop

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

// 0 1 2 3 4 5



//**************************************************** */
//! for of loop
const newArr2 = []
for(const country of countries){
  newArr2.push(country.toUpperCase())
}

console.log(newArr2)  




//**************************************************** */
//! break

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2


//**************************************************** */
//! continue
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5



//**************************************************** */
//! for deneme

for (let i = 0; i < 50; i++) {
  console.log('#'.repeat(i));  
}

10