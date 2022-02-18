let div = document.querySelector('.container')
let form = document.createElement('form')
form.classList.add('form')
let h1 = document.createElement('h1')

let btn = document.createElement('button')
btn.textContent = 'Далее'
btn.type = 'submit'
btn.classList.add('btnNext')

if (div.classList.contains('html1')) {
    h1.classList.add('h1_1')
    h1.textContent = 'Заполните данные клиента'
    
    let inputName = document.createElement('input')
    inputName.classList.add('inputName')
    inputName.placeholder = 'Фамилия, имя, отчество'
    
    inputName.type = 'text'
    inputName.required = true
    
    let inputAddress = document.createElement('input')
    inputAddress.required = true
    inputAddress.placeholder = 'Свердловская область, г Екатеринбург, ул Стачек, д 18А, кв 64'
    
    form.append(h1)
    form.append(inputName)
    form.append(inputAddress)
    form.append(btn)
    div.append(form)

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        window.location.href = 'index2.html'
    })
}

if (div.classList.contains('html2')) {
    h1.classList.add('h1_2')
    h1.textContent = 'Заполните данные карты'
    
    let inputCard = document.createElement('input')
    inputCard.classList.add('inputCard')
    inputCard.placeholder = 'Номер карты'
    inputCard.required = true
    

    let inputBox = document.createElement('div')
    inputBox.classList.add('inputBox')
    
    let inputPeriod = document.createElement('input')
    inputPeriod.classList.add('inputPeriod')
    inputPeriod.required = true
    inputPeriod.placeholder = 'Срок действия'

    let inputCVV = document.createElement('input')
    inputCVV.classList.add('inputCVV')
    inputCVV.required = true
    inputCVV.placeholder = 'CVV'
    inputCVV.type = 'password'
    inputCard.maxlength = '3'
    inputCard.max = '999'
    
    form.append(h1)
    form.append(inputCard)
    inputBox.append(inputPeriod)
    inputBox.append(inputCVV)
    form.append(inputBox)
    form.append(btn)
    div.append(form)

    // с масками required не работает
    var maskOptionsCard = {
        mask: '0000 0000 0000 0000',
        lazy: false
    } 
    var mask = new IMask(inputCard, maskOptionsCard);

    var maskOptionsPeriod = {
        mask: '00 / 00',
        lazy: false
    } 
    var mask = new IMask(inputPeriod, maskOptionsPeriod);

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        window.location.href = 'index1.html'
    })
}