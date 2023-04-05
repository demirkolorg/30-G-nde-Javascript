
const h1=document.querySelector('h1')
console.log(h1.attributes);
console.log('id.value:',h1.attributes.id.value);
console.log('id.style:',h1.attributes.style.value);

for (const attr of h1.attributes) {
  console.log('name: ',attr.name,':value: ',attr.value);
}


const ul=document.querySelector('ul')
const deleteBtn=document.querySelectorAll('.delete-btn')

deleteBtn.forEach(btn => {
  btn.addEventListener('click', e=>{
    e.target.closest('li').remove()
    if(ul.childElementCount===0){
      ul.innerHTML='Gösterilecek veri bulunamadı'
    }
  })
}) 