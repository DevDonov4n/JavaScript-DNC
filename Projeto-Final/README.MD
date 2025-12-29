# To-Do List — JavaScript Vanilla

Aplicação de lista de tarefas (To-Do List) desenvolvida com **JavaScript puro**, utilizando **manipulação direta do DOM** e **LocalStorage** para persistência de dados no navegador.

O projeto tem como objetivo demonstrar conceitos fundamentais de front-end sem dependência de frameworks, incluindo gerenciamento de estado, eventos, renderização dinâmica e operações assíncronas simuladas.

---

## 📌 Funcionalidades

- Criar novas tarefas
- Marcar e desmarcar tarefas como concluídas
- Remover tarefas individualmente
- Remover todas as tarefas concluídas
- Persistência automática via LocalStorage
- Indicador de progresso de tarefas concluídas
- Simulação de operação assíncrona na criação de tarefas

---

## 🧱 Estrutura de Dados

Cada tarefa segue o seguinte formato:

```js
{
  id: number,        // Identificador único
  desc: string,      // Descrição da tarefa
  checked: boolean   // Status de conclusão
}
As tarefas são armazenadas como um array serializado em JSON no LocalStorage.
```


🗂️ Arquitetura do Projeto
O projeto está organizado de forma funcional, separando responsabilidades por blocos lógicos:

scss

├── Estado da Aplicação
├── Persistência (LocalStorage)
├── Manipulação do DOM
├── Eventos (Formulário, Checkbox, Botões)
├── Lógica de Negócio
└── Inicialização
Embora esteja em um único arquivo, a organização permite fácil refatoração para módulos ou frameworks.



🔁 Fluxo da Aplicação
Ao carregar a página:

As tarefas são recuperadas do LocalStorage

Cada tarefa é renderizada no DOM

O progresso é calculado e exibido

Ao criar uma nova tarefa:

O formulário é submetido

O botão é desabilitado

Uma Promise simula um processo assíncrono

A tarefa é criada e renderizada

O estado é persistido

O formulário é resetado

Ao marcar/desmarcar uma tarefa:

O evento do checkbox atualiza o LocalStorage

O progresso é recalculado

Ao remover tarefas:

A tarefa é removida do DOM

O estado é atualizado no LocalStorage



🧠 Gerenciamento de Estado
O LocalStorage é a fonte única da verdade (Single Source of Truth)

O estado em memória é sempre derivado do LocalStorage

O DOM é renderizado com base nesse estado



⏱️ Operações Assíncronas
A função getCreatedTaskInfo utiliza Promise + setTimeout para simular:

Requisições a uma API

Processamentos assíncronos

Fluxos reais de aplicações modernas

Isso prepara o código para futuras integrações com back-end.



🚀 Tecnologias Utilizadas
JavaScript (ES6+)

HTML5

CSS3

Web APIs (DOM, LocalStorage)



📈 Possíveis Evoluções
Separação em módulos (ES Modules)

Implementação com React ou Vue

Integração com API REST

Filtros (todas, concluídas, pendentes)

Edição de tarefas

Testes automatizados

Acessibilidade (ARIA aprimorado)

👤 Autor
Desenvolvido por Donovan Bueno
Projeto criado com foco em aprendizado, boas práticas e evolução técnica.