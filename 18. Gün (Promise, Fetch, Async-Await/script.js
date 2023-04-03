

// const test = callback=>{
// setTimeout(() => {
//     callback('hata oluştu',[])
// }, 2000);
// }

// const collback=(err,data)=>{
// if(err){
//     console.error("hata : ",err);
// }else{
//     console.warn("data : ",data);
// }
// }

// test(collback)


//! Pending, fulfilled ve rejected, Promise kavramının üç temel durumudur.

//!Pending ((BAŞLANGIÇ)): 
//Bir Promise, başlangıçta "pending" durumunda olur.
//Bu, Promise'in henüz tamamlanmadığı ve sonucunun henüz bilinmediği anlamına gelir.

//!Fulfilled ((BAŞARILI)) ((scc)) :
// Bir Promise, işlem ((başarılı)) bir şekilde tamamlandığında
// "fulfilled" durumuna geçer. Bu durumda, Promise'in bir sonuç değeri vardır
// ve bu sonuç değeri, "then()" yöntemiyle belirtilen geri arama işlevine aktarılır.

//!Rejected ((BAŞARISIZ)) ((err)):
// Bir Promise, işlem ((başarısız)) olduğunda "rejected" durumuna geçer. 
// Bu durumda, Promise'in bir hata nesnesi vardır ve bu hata nesnesi, 
// "catch()" yöntemiyle belirtilen geri arama işlevine aktarılır.

/*
const promise=new Promise((scc,err)=>{
 setTimeout(() => {
    // scc('işlem başarılı') //success
    err('işlem hatalı') //error
 }, 1500);
})

promise.then((data)=>{
    console.log(data);
}).catch((err=>{
    console.warn(err);
}))
*/

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

// fetch(API_URL)
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.warn(err))



async function getPosts() {
    const res = await fetch(API_URL)
    const data =await res.json()
    console.log(data);
}

getPosts()