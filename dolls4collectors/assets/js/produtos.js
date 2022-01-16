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
        titulo: 'collector ai que loucura',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 2,
        curtida: 0,
        img: 'assets/img/produtos/produto__7.JPG',
        categoria: 'barbie playline',
        titulo: 'aiii que badalo',
        preco: 'R$ 00,00',
        quantidade: 0
    },
    {
        id: 3,
        curtida: 0,
        img: 'assets/img/produtos/produto__8.JPG',
        categoria: 'barbie collector',
        titulo: 'collector ai que loucura',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 4,
        curtida: 0,
        img: 'assets/img/produtos/produto__6.JPG',
        categoria: 'barbie collector',
        titulo: 'collector ai que loucura',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 5,
        curtida: 0,
        img: 'assets/img/produtos/produto__7.JPG',
        categoria: 'barbie playline',
        titulo: 'aiii que badalo',
        preco: 'R$ 00,00',
        quantidade: 0
    },
    {
        id: 6,
        curtida: 0,
        img: 'assets/img/produtos/produto__8.JPG',
        categoria: 'barbie collector',
        titulo: 'collector ai que loucura',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 7,
        curtida: 0,
        img: 'assets/img/produtos/produto__6.JPG',
        categoria: 'barbie collector',
        titulo: 'collector ai que loucura',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 8,
        curtida: 0,
        img: 'assets/img/produtos/produto__7.JPG',
        categoria: 'barbie playline',
        titulo: 'aiii que badalo',
        preco: 'R$ 00,00',
        quantidade: 0
    },
    {
        id: 9,
        curtida: 0,
        img: 'assets/img/produtos/produto__8.JPG',
        categoria: 'barbie collector',
        titulo: 'collector ai que loucura',
        preco: 'R$ 00,00',
        quantidade: 0
    },

    {
        id: 10,
        curtida: 0,
        img: 'assets/img/produtos/produto__6.JPG',
        categoria: 'barbie collector',
        titulo: 'collector ai que loucura',
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

                    <botton class="botao__curtida botao__curtida--produto" id="botao__curtir" data-botao-curtida>
                        <a key="`+val.curtida+`" href="#" class="addCurtida"></a>
                        
                    </botton>

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