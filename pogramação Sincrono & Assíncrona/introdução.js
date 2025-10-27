
//exemplo de codigo Sincrono
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

const teste = 8787;
console.log('sexto teste é:' + teste);


//exemplo de codigo Assincrono
console.log('primeiro');
setTimeout(() => {
    console.log('segundo');
    
}, 5000);
console.log('terceiro');

