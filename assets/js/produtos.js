var itens = [
    {
        id: 0,
        curtida: 0,
        img: 'assets/img/produtos/produto__1.JPG',
        categoria: 'barbie blusa',
        titulo: 'blusinha artesanal',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 1,
        curtida: 0,     
        img: 'assets/img/produtos/produto__6.JPG',
        categoria: 'barbie collector',
        titulo: 'collector',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 2,
        curtida: 0,
        img: 'assets/img/produtos/produto__7.JPG',
        categoria: 'barbie playline',
        titulo: 'barbie exemplo',
        preco: 'R$ 00,00',
        quantidade: 0
    },
    {
        id: 3,
        curtida: 0,
        img: 'assets/img/produtos/produto__8.JPG',
        categoria: 'barbie collector',
        titulo: 'collector',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 4,
        curtida: 0,
        img: 'assets/img/produtos/produto__6.JPG',
        categoria: 'barbie collector',
        titulo: 'collector',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 5,
        curtida: 0,
        img: 'assets/img/produtos/produto__7.JPG',
        categoria: 'barbie playline',
        titulo: 'barbie exemplo',
        preco: 'R$ 00,00',
        quantidade: 0
    },
    {
        id: 6,
        curtida: 0,
        img: 'assets/img/produtos/produto__8.JPG',
        categoria: 'barbie collector',
        titulo: 'collector',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 7,
        curtida: 0,
        img: 'assets/img/produtos/produto__6.JPG',
        categoria: 'barbie collector',
        titulo: 'collector',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 8,
        curtida: 0,
        img: 'assets/img/produtos/produto__7.JPG',
        categoria: 'barbie playline',
        titulo: 'barbie exemplo',
        preco: 'R$ 00,00',
        quantidade: 0
    },
    {
        id: 9,
        curtida: 0,
        img: 'assets/img/produtos/produto__8.JPG',
        categoria: 'barbie collector',
        titulo: 'collector',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 10,
        curtida: 0,
        img: 'assets/img/produtos/produto__6.JPG',
        categoria: 'barbie collector',
        titulo: 'collector',
        preco: 'R$ 00,00',
        quantidade: 0
    }
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((val)=>{
        containerProdutos.innerHTML += `
            <div class=" card__produto__alternativo card__padrao" id="produto">
                <div class="card__produto__imagem">
                    <img src="`+val.img+`" alt="">
                </div>

                <div class="menu__produtos">
                    <div class="card__produto__rolagem">
                        <img src="assets/img/elipse--on.svg" alt="">
                        <img src="assets/img/elipse.svg" alt="">
                        <img src="assets/img/elipse.svg" alt="">
                        <img src="assets/img/elipse.svg" alt="">
                    </div>

                    <div class="botao__curtida__produto">
                        <input id="manterLogado" type="checkbox" class="btradio ">
                        <label for="manterLogado"></label>
                    </div>



                    <botton class="botao__comprar__produto">
                        <a key="`+val.id+`" href="#" class="addCarrinho">
                        <img src="assets/img/comprar__alternativo.svg" alt="">     
                        </a>
                    </botton>
                </div>


                <div class="card__produto__texto">
                    <h3 class="card__categoria" >`+val.categoria+`</h3>
                    <h2 class="card__titulo">`+val.titulo+`</h2>
                    <h2 class="card__preco">`+val.preco+`</h2>
                </div>
            </div>
        `;
    })
}

inicializarLoja();