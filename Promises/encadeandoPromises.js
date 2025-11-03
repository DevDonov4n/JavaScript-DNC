console.log('Criar um pedido online em uma loja');

let promessaPedidoConfirmado = new Promise((resolve, reject) => {
    console.log('iniciando pedido');
    
    setTimeout(() => {
        let sucesso = true;
        if(sucesso) {
            console.log('pedido confirmado com sucesso');
            resolve({confirmacao: true, pagamento: 'ESPERANDO'})
        } else {
            reject('Pedido não pode ser confirmado, tente novamente');
        }
    }, 3000);
});


let promessaPagamento = (pedido) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        let pagamento = true;
        if(pagamento) {
            console.log('Pagamento Aprovado com Sucesso');
            resolve({confirmacao: true, pagamento: 'APROVADO'});
        }else{
            reject('Pagamento mal sucedido')
        }
    }, 3000);
});

const promesaResolvida = promessaPedidoConfirmado
    .then((pedido) => {
        console.log({pedido});
        return promessaPagamento(pedido)
    })
    .then((pagamento) => {
        console.log({pagamento});
        console.log('Sucesso ao realizar pedido! Aguardando envio')
    });

