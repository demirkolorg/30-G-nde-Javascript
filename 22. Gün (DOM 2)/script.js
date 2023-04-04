let span = document.getElementById('10')

let h1 = document.createElement('h1')
h1.className = 'test'
h1.style.backgroundColor = 'orange'
h1.innerHTML = 'bu h1 elementi javascript prepend ile span etikenden önce gelecek şekilde eklendi ve <u>5 saniye </u>içerisinde silinecek. '
span.prepend(h1)

let sanye = document.createElement('a')
let saniyeSayac = 5
const interval = setInterval(() => {
    saniyeSayac--
    sanye.innerHTML = `Kalan süre: <u>` + saniyeSayac + ` saniye</u>`
    h1.append(sanye)
}, 1000);

setTimeout(() => {
    h1.remove()
    clearInterval(interval)


    let h6 = document.createElement('h6')
    h6.className = 'test'
    h6.style.backgroundColor = 'aqua'
    h6.style.fontSize = '30px'
    h6.textContent = 'bu h6 elementi javascript append ile span etiketinden hemen sonra eklendi ve SİLİNMEYECEK  '
    span.append(h6)

}, 5000);