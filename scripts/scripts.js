const share = document.querySelector('.caja_social');
const btn = document.querySelector('.activo');
const btn2 = document.querySelector('.dark');
btn.addEventListener('click', function compartir() {
    share.classList.toggle('display');
})

btn2.addEventListener('click', function compartirtlf() {
    share.classList.toggle('display');
})



