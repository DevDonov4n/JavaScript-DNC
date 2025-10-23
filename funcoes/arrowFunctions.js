const atualizaContadorRegressivo = (tempo) => {
    
    let segRes = tempo;

    const atualizadorCont = setInterval(() => {
        console.log(segRes);
        if(segRes === 0){
            clearInterval(atualizadorCont);
        }else{
            segRes--
        }
    }, 1000);
}

const iniciarContador = (tempo) => {
    atualizaContadorRegressivo(tempo)
}

iniciarContador(3);


//-----------------------------------------------------------------------------


const getData = (data) => ({
    manipulado: data.teste
});
console.log(getData({teste: 'teste'}));
