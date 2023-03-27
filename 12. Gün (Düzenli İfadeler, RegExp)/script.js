

//**************************************************** */
//! Bayraklar 
//Bayraklar, normal bir ifadede arama türünü belirleyen isteğe bağlı parametrelerdir. 
// İşaretlerden bazılarını görelim: 
// g: tüm metinde bir kalıp aramak anlamına gelen global bir bayrak 
// i: büyük/küçük harfe duyarsız bayrak(hem küçük hem de büyük harf arar) 
// m: çok satırlı


//!Creating a pattern with RegExp Constructor
// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)


//with flag
let pattern2 = 'love'
let flag2 = 'gi'
let regEx2 = new RegExp(pattern2, flag2)

let regex3=new RegExp('love','gi')
console.log(regex3);

let regex4=/love/gi
console.log("regex4:",regex4);

//**************************************************** */
//! test // true false


let word=/salak/i
let yorum='Sen SALAK mısın kardeşim.'

console.log(word.test(yorum))



//**************************************************** */
//! 
let text='merhaba ben 30 yaşındayım yani 1993 doğumluyum'

console.log("text.match(/[0-9]/g) :",
  text.match(/[0-9]/g) //sadee sayı
);

console.log("text.match(/\d/g) : ",
  text.match(/\d/g) //sadece sayı
);

console.log("text.match(/\d+/g) : ",
  text.match(/\b\d{4}\b/g) //sadece sayı
);




//**************************************************** */
//! 

let firstName="1apolas";
console.log(
/^[a-z]+$/.test(firstName)
);


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




//**************************************************** */
//! 




//**************************************************** */
//! 




//**************************************************** */
//! 


