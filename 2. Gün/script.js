//primitive yani ilkel tipler değer bazlı => Düzenlenemez ancak karşılaştırılabilir
//non-Primitive yani ilkel olmayan tipler referans bazlı => Düzenlenebilir ancak karşılaştırılamaz

//**************************************************** */
//primitive yani İlke veri tipleri
let num1=3
let num2=3
console.log(num1==num2); //true

let js='JavaScript'
let py='Python'
console.log(js==py); //false

let bol1=true
let bol2=false
console.log(bol1==bol2); //false

let word ='JavaScript'
word[0]='Y'
console.log(word); //JavaScript dönecek çünkü ilkel tipler düzenlenemez

//**************************************************** */
//non-primitive yani ilkel olmayan veri tipleri
let nums1=[1,2,3,4,5,6,7,8,9]
let nums2=[1,2,3,4,5,6,7,8,9]
nums1[0]=10
console.log(nums1);//[10,2,3,4,5,6,7,8,9] dönecek çünkü ilkel olmayan tipler düzenlenebilir

console.log('nums1==nums2');
console.log(nums1==nums2); //false döndürür çünkü değerlerini değil, referanslarını tuttuğu için eşitlik sözkonusu değildir

let arr=[1,'apolas',true,3.7,nums1,js,py,bol1,bol2,word]
arr[0]=7
console.log(arr);
console.log(arr[4][0]);

let user1={
    name:'Abdullah',
    surname:'Demirkol'
}

let user2={
    name:'Abdullah',
    surname:'Demirkol'
}

let user3=user1

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1==user2);//false döndürür çünkü değerlerini değil, referanslarını tuttuğu için eşitlik sözkonusu değildir
console.log(user1==user3);//true döndürür çünkü değişken tanımlanırken referanslar birbirine eşitlendi

//**************************************************** */
//numbers:integers ve decimal 
let age=30
const gravity=9.81
let mass=72
const pi=3.14

//**************************************************** */
// Math Object : 
console.log(Math.PI)                            // 3.141592653589793
console.log(Math.round(5.9))               // en yakın sayıya yuvarlıyor//6
console.log(Math.round(5.1))               // en yakın sayıya yuvarlıyor//5
console.log(Math.floor(7.9))                // aşağı yuvarlar //7
console.log(Math.floor(7.1))                // aşağı yuvarlar //7
console.log(Math.ceil(9.9))                // yukarı yuvarlar //10
console.log(Math.ceil(9.1))                // yukarı yuvarlar //10
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value
console.log(Math.random()) // creates random number between 0 to 0.999999
console.log(Math.floor(Math.random () * 11)) // creates random number between 0 and 10
console.log(Math.abs(-10))     // 10 // mutlak değerini alıyor
console.log(Math.sqrt(25))     // 5  // karekökünü alıyor
console.log(Math.pow(3, 2))    // 9  // karesini alıyor
console.log(2**5)              // 32  // karesini alıyor
console.log(Math.E)             // 2.718
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046
console.log(Math.sin(0))        // 0
console.log(Math.sin(60))        // -0.3048106211022167
console.log(Math.cos(0))        // 1
console.log(Math.cos(60))        // -0.9524129804151563


//**************************************************** */
//Strings concatenation
let space = ' '           // an empty space string
let firstName = 'Abdullah'
let lastName = 'DEMİRKOL'
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(firstName + space + lastName); //Abdullah DEMİRKOL
console.log(fullName); //Abdullah DEMİRKOL

const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
Morbi sit amet purus metus. In vel felis quam. Etiam pellentesque tortor\
ac pellentesque auctor. Nulla at viverra nulla, id pretium diam. Donec a\
purus sapien. Cras eu justo accumsan, volutpat urna quis, laoreet metus.\
Fusce ultricies lectus eu nisi vulputate, tristique pellentesque ante varius.\
Pellentesque odio orci, egestas in efficitur semper, commodo sit amet lectus"
console.log(lorem)

const lorem2=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit 
amet purus metus. In vel felis quam. Etiam pellentesque tortor ac pellentesque auctor.
 Nulla at viverra nulla, id pretium diam. Donec a purus sapien. Cras eu justo accumsan,
  volutpat urna quis, laoreet metus. Fusce ultricies lectus eu nisi vulputate,
   tristique pellentesque ante varius. Pellentesque odio orci, egestas in efficitur
   semper, commodo sit amet lectus.
Duis eu turpis in eros dapibus viverra. Vestibulum tincidunt cursus ante at dictum.
 Vivamus non tincidunt nulla. Proin non mi vitae felis pharetra posuere. Sed ultrices
    tincidunt ex, vitae efficitur neque elementum ac. Fusce convallis luctus ex, ac 
        sagittis sem. Proin in metus odio. Praesent tincidunt rutrum odio at varius. 
            Aliquam efficitur commodo tortor, eleifend accumsan lorem interdum in. 
  sed efficitur orci ex et odio. Nulla a est dignissim, consequat enim non, 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam molestie 
        ultricies nisi at pharetra. Nulla sed mattis elit. Praesent sit amet feugiat 
            sem. Ut risus tortor, sagittis a malesuada ut, sodales et lacus. Suspendisse 
                potenti. Donec ac ligula volutpat, dignissim magna vel, dictum nibh. Pellentesque
                gravida nulla sit amet porta sodales. Aliquam consectetur metus scelerisque 
            vestibulum molestie.`
console.log(lorem2);

//**************************************************** */
//Escape Sequences in Strings
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//**************************************************** */
//Template Literals (Template Strings)
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let ad='Abdullah'
let soyad ='DEMİRKOL'
console.log(`Merhaba benim adım ${ad+ ' '+soyad}`);
console.log(`Merhaba benim adım ${ad} ${soyad}`);

//**************************************************** */
//String Methods
let javaScript = 'JavaScript'
let adsoyad = `${ad} ${soyad}`
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(javaScript.length)         // 10
console.log(javaScript[0])         // J => ilk değer
console.log(javaScript[javaScript.length-1])         // t => son değer
console.log(javaScript.toUpperCase())         // JAVASCRIPT
console.log(javaScript.toLowerCase())         // javascript
console.log(javaScript.substring(2,4))         // 2'den 4'e kadar al //va
console.log(javaScript.substr(2,4))         // 2'den itibaren 4 karakter al // vaSc
console.log(adsoyad.split())         // ["Abdullah DEMİRKOL"]
console.log(adsoyad.split(' '))         // ["Abdullah","DEMİRKOL"]
console.log(adsoyad.includes('Abdullah'))         //true
console.log(adsoyad.includes('Abdullah'))         //true
console.log(adsoyad.replace('Abdullah','Ayşenur'))         //Ayşenur DEMİRKOL
console.log(adsoyad.charAt('10'))         //E
console.log(adsoyad.charAt(adsoyad.length-1))         //L
console.log(adsoyad.charCodeAt('10'))         //69 //ASCII kodunu döndürür
console.log(adsoyad.indexOf('a'))         //15
console.log(adsoyad.indexOf('Ab'))         //0
console.log(adsoyad.indexOf('Ay'))         //-1 // bulamadığı için -1 döndürdü
console.log(adsoyad.search('DE'))         //9
console.log(string.match('love'))
console.log(string.match(/love/g))
console.log(string.match(/love/gi))
console.log(string.match('JavaScript'))
console.log(adsoyad.repeat(7))


//**************************************************** */
//Changing Data Type (Casting)
let num = '10'
console.log(typeof parseInt(num)) // 10
console.log(typeof Number(num)) // 10
console.log(typeof +num) // 10
console.log(typeof +'20') // number

let numbur= '9.81'
console.log(typeof parseFloat(numbur)) // 9.81
console.log(typeof Number(numbur)) // 9.81

let number2 = 9.81
console.log(typeof parseInt(number2)) // 9