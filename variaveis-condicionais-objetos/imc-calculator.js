const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'UNDERWEIGHT',
    REGULAR: 'REGULAR',                 // Dicionário que guarda os tipos de classificação do IMC
    OVERWHEIGHT: 'OVERWHEIGHT',
    OBESITY: 'OBESITY',
}

function getClassificationDatail(classification){       // Função que retorna a descrição detalhada da classificação (ex: "Abaixo do Peso")
    return{
        [IMC_STATUS_DICT.UNDERWEIGHT]: 'Abaixo do Peso',
        [IMC_STATUS_DICT.REGULAR]: 'Peso Normal',
        [IMC_STATUS_DICT.OVERWHEIGHT]: 'Acima do Peso',
        [IMC_STATUS_DICT.OBESITY]: 'obesidade',
    }[classification] || 'Falha ao encontrar a descrição do status' // caso não encontre, mostra mensagem de erro
}

// Função que retorna o tipo de classificação do IMC (ex: UNDERWEIGHT, REGULAR...)
function getClassificationDesc(classification){
    switch (classificateImc) {
        case 'UNDERWEIGHT':
            return IMC_STATUS_DICT.UNDERWEIGHT;
        case 'REGUALAR':
            IMC_STATUS_DICT.REGULAR;
        case 'OVERWEIGHT':
            return IMC_STATUS_DICT.OVERWHEIGHT;
        case 'OBESITY':
            return IMC_STATUS_DICT.OBESITY;
    
        default:
            return 'ERRO AO CLASSIFICAR O IMC'
        
    }
}

function classificateImc (imc){     // Função que classifica o IMC de acordo com o valor numérico
    if (imc < 18.5){
        return IMC_STATUS_DICT.UNDERWEIGHT
    }else if(imc >= 18.5 && imc < 25){
        return IMC_STATUS_DICT.REGULAR
    }else if(imc >= 25 && imc < 30){
        return IMC_STATUS_DICT.OVERWHEIGHT
    }else{
        return IMC_STATUS_DICT.OBESITY
    }
}

function calculateImc (person){     // Função que calcula o IMC de uma pessoa
    let height = person.height
    let weight = person.weight
    let conversorFactor = 0.01
    height *= conversorFactor;


    let imc = weight / (height * height);
    const classification = classificateImc(imc);
     const classificationDetail = getClassificationDatail(classification);
    
    
    
    const result = `O resultado do IMC é: ${imc}`
    const isHealthy = true;

    return{
        name: person.name,
        imc,
        classification,
        classificationDetail,
        result,
        isHealthy,
    }
}

const person = {
    name: 'Dodo',
    height: 190,
    weight: 70,
}

const person2 = {
    name: 'Denzel',
    height: 165,
    weight: 75,
}

console.log(calculateImc(person));
console.log(calculateImc(person2));
