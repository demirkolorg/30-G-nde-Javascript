
// const h1=document.getElementsByTagName('h1')
// for (let i = 0; i < h1.length; i++) {
//   const element = h1[i]
//  console.log(element)
// }




// const h1=document.getElementsByTagName('h1');
// [...h1].forEach(item => {
//     console.log(item)
// })




// const title1=document.getElementsByClassName('title-1');
// [...title1].forEach(item => {
//     console.log(item)
// })



// console.log(document.querySelectorAll('.title-1'))
// console.log(document.querySelectorAll('.title-1 + .title-2'))



// const h1=document.getElementById('second-title')
// h1.style.color='blue'
// h1.style.backgroundColor='yellow'
// h1.style.fontSize='50px'
// h1.title='Second Title nesnesinin Title özelliği kullanıldı burada'
// h1.setAttribute('title','title özelliği ikinci kez değiştirildi')
// h1.setAttribute('style','border: 7px solid blue; border-radius: 5px')
// h1.setAttribute('data-set','10')
// h1.dataset.id='5'
// h1.classList.add('addedClassDeneme-1')
// h1.classList.add('addedClassDeneme-2','addedClassDeneme-3')
// h1.classList.remove('addedClassDeneme-2')
// h1.classList.remove('addedClassDeneme-2','addedClassDeneme-3')
// h1.classList.toggle('toggleClassDeneme-1')
// h1.textContent="<u> textContent yani düz yazı eklendi </u>"
// h1.innerHTML="<u> inner  HTML yani html yazı eklendi </u>"



document.querySelectorAll('h1').forEach((h1, index) => {
    if (index % 2 === 0) {
        h1.style.color = 'green'
    } else {
        h1.style.color = 'red'
    }
});