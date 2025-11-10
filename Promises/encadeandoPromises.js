console.log('Criar um pedido online em uma loja');

let confirmarPedido = async () => new Promise((resolve, reject) => {
    console.log('iniciando pedido');
    
    setTimeout(() => {
        let sucesso = false;
        if(sucesso) {
            console.log('pedido confirmado com sucesso');
            resolve({confirmacao: true, pagamento: 'ESPERANDO'})
        } else {
            reject('Pedido não pode ser confirmado, tente novamente');
        }
    }, 5000);
});


let processoPagamento = async (pedido) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        let pagamento = false;
        if(pagamento) {
            console.log('Pagamento Aprovado com Sucesso');
            resolve({confirmacao: true, pagamento: 'APROVADO'});
        }else{
            reject('Pagamento mal sucedido')
        }
    }, 3000);
});

try{
    const pedidoConfirmado = await confirmarPedido();
    const pagamentoAprovado = await processoPagamento(pedidoConfirmado);
    console.log('Tudo deu certo com seu pedido');
} catch (error) {
    console.log(error);
}


