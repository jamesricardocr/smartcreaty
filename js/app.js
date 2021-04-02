const logo = document.querySelector('.logo-tipo');
const copyright = document.querySelector('.copyright');


window.addEventListener('load', () => {

    animacionInicial();

});



function animacionInicial() {

    logo.classList.add('animacion');

    setTimeout(() => {

        copyright.classList.add('copyright-animacion');
        copyright.classList.add('copyright-animacion-2');
    }, 3000);

}