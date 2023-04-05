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

const genderSelect = document.getElementById('gender')
genderSelect.addEventListener('change', e => {
    console.log([...e.target.selectedOptions].map(el => el.value));
})

const sporSelected = document.getElementById('spor')
sporSelected.addEventListener('change', e => {
    console.log([...e.target.selectedOptions].map(el => el.value));
})

const rules = document.getElementById('rules')
rules.addEventListener("change", function () {
    if (this.checked) {
        console.log("Checkbox seçildi");
    } else {
        console.log("Checkbox seçili değil");
    }
});

document.querySelector('input[name=stack]').checked

const stack = document.getElementsByName('stack')

for (let i = 0; i < stack.length; i++) {
    stack[i].addEventListener("change", function() {
      console.log("Seçili seçenek: " + this.value);
    });
  }
