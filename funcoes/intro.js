/* function darONome(parametros){
    PROCESSA INFORMAÇÃO
    RETORNA
}*/

function somaVal(listaVal) {
    let total = 0;
    for(let valor of listaVal){
        total+= valor;
    };

    return total
}

console.log(somaVal([2,4,4,56,7,8,68,12]));


//-----------------------------------------------------------------------------


function verificaPar(valor){
    return valor % 2 === 0 ? 'é par' : 'é impar' 
}

console.log((verificaPar(10)));


//-------------------------------------------------------------------------------
