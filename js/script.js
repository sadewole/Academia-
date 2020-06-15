const $ = (value) => document.querySelector(value);
const $all = (value) => document.querySelectorAll(value);

const current = $('.current')
const persoanl = $('.personal')
const organization = $('.organization')
const dataAttr = $all('.plans-container')

persoanl.addEventListener('click', () => {
    current.style.transform = 'translateX(-50%)'

    dataAttr[0].style.display = 'block'
    dataAttr[1].style.display = 'none'
})

organization.addEventListener('click', () => {
    current.style.transform = 'translateX(50%)'

    dataAttr[0].style.display = 'none'
    dataAttr[1].style.display = 'block'
})