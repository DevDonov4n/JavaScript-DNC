/*
O DOM (Document Object Model) é uma representação estruturada de um documento HTML ou XML,
que permite que scripts e programas acessem e manipulem o conteúdo, estrutura e estilo de 
uma página web.
*/

//Selecionando elementos:
/* Selecionar por ID*/ const elemento = document.getElementById('meuId');
/*Selecionar por classe*/ const elementos = document.getElementsByClassNa('minhaClasse'); 
/*Selecionar por tag*/ const paragrafos = document.getElementsByTagName('p');

//Modificando elementos:
/*Alterar conteúdo de texto*/ elemento.textContent = 'Novo texto';
/* Alterar HTML interno*/ elemento.innerHTML = '<strong>Texto em negrito</strong>'; 
/*Modificar atributos*/ elemento.setAttribute('class', 'novaClasse');

//Criando e adicionando elementos:
/* Criar um novo elemento*/ const novoParagrafo = document.createElement('p'); 
/* Adicionar conteúdo*/ novoParagrafo.textContent = 'Este é um novo parágrafo';
/* Adicionar ao DOM*/ document.body.appendChild(novoParagrafo);

//Removendo elementos:
/* Remover um elemento*/ const elementoParaRemover = document.getElementById('elementoAntigo');
                         elementoParaRemover.parentNode.removeChild(elementoParaRemover);

/*
--------------------------------------------------------------------------------------------------------------------
A combinação do DOM com JavaScript é fundamental para criar experiências web modernas e interativas. Aqui estão algumas razões pelas quais essa combinação é tão importante:

Interatividade em tempo real: Permite atualizar o conteúdo da página sem recarregá-la
Melhor experiência do usuário: Possibilita criar interfaces mais responsivas e dinâmicas
Manipulação eficiente de dados: Facilita a atualização de informações na página com base em dados recebidos do servidor
Validação de formulários: Permite verificar e validar entradas do usuário antes de enviar ao servidor
Animações e efeitos visuais: Possibilita criar animações suaves e efeitos visuais atraentes
*/