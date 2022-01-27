

const verificaLogin = ()=>{
    const inUser = document.getElementById('inUser');
    const inPass = document.getElementById('inPass');
    const verificaAcesso = document.getElementById('verificaAcesso')

    
    const usuario = inUser.value;
    const senha = inPass.value;

    const user = `henrique`;
    const pass = `henrylima1`;

    if (user == usuario && pass == senha){
        event.defaultPrevented

        inUser.className = 'form__input__correct';
        inPass.className = 'form__input__correct';
        verificaAcesso.className = 'botao__padrao botao__submit botao__submit--correct'

        
    } else if (pass != senha || user != usuario){
        event.defaultPrevented

        inUser.className = 'form__input__incorrect';
        inPass.className = 'form__input__incorrect';
        verificaAcesso.className = 'botao__padrao botao__submit botao__submit--incorrect'
    }


    return verificaLogin
}


const btLogar = document.getElementById('btLogar');
btLogar.addEventListener("click", verificaLogin)