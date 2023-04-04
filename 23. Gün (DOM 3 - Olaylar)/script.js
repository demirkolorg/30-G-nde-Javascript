let buton = document.getElementById('btn')
let buton2 = document.getElementById('btn2')

// buton.addEventListener('click',e=>tiklandi(e))

let tikSayac = 0

function tiklandi(e) {
    if (e.getAttribute('id') === 'btn2') return
    tikSayac++
    console.log('butona tıklandı');
    console.log('id:', e.getAttribute('id'));
    buton.classList.toggle('btn')
    buton.textContent = 'Butona ' + tikSayac + '. defa tıklandı'
}


buton2.onclick = e => {
    console.log(e)
    buton2.style.color = 'white'
    buton2.style.backgroundColor = 'red'
}