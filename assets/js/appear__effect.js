const apareceTexto = ()=>{
    const texto = document.getElementById('effect-appear');
    const textoPosicao = texto.getBoundingClientRect().top;

    const telaPosicao = window.innerHeight / 1.5;

    if(textoPosicao < telaPosicao ){
        texto.classList.add('effect-appear-on')

    } 

}

window.addEventListener('scroll', apareceTexto)