var produto = document.querySelectorAll('[data-botao-curtida]');



for (var i = 0; i < produto.length; i++){
    produto[i].innerHTML = `
    <img class="botao__curtida__coracao" src="assets/img/coracao.svg" alt="">`;

    
    produto[i].addEventListener("click", function(){

        curtirProduto()
    })
}


curtirProduto  = () => {
    event.preventDefault()
    console.log('curti')

    return curtirProduto
}


