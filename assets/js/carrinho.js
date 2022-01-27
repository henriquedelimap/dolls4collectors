atualizarCarrinho = () => {
    event.preventDefault()
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = `<h2 class="titulo__secao titulo__secao__reajuste">carrinho</h2>
    `;
    itens.map((val)=>{
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `
            
            <div class="card__produto__carrinho card__padrao">
                <div class="card__produto__carrinho__imagem">
                    <img src="`+val.img+`" alt="">
                </div>

                <div class="card__produto__texto__carrinho">
                    <h3 class="card__categoria " >`+val.categoria+`</h3>
                    <h2 class="card__titulo">`+val.titulo+`</h2>
                    <h4 class="card__preco">`+val.preco+`</h4>
                </div>

                <div class="quantidade__produto__carrinho">
                    <p>`+val.quantidade+`</p>
                </div>
            </div>
        `;
        }

    })
}

 var links = document.getElementsByClassName('addCarrinho');

 for(var i = 0; i < links.length; i++){
     links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
     })
 }





