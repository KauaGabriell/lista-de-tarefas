Projeto Lista de Tarefas (To-Do List) 📝
Uma aplicação web simples de lista de tarefas (To-Do List) criada com HTML, CSS e JavaScript puro. Este projeto foi desenvolvido como um exercício prático para solidificar conceitos avançados de manipulação de arrays e gerenciamento de estado no front-end.

✨ Visão Geral do Projeto
(./assets/image.png)

🚀 Funcionalidades
Adicionar Tarefas: Campo de texto para inserir novas tarefas, com validação para não permitir entradas vazias ou com caracteres especiais.
Remover Tarefas: Botão individual para excluir tarefas da lista.
Marcar como Concluída: Funcionalidade de clique para marcar/desmarcar uma tarefa como concluída, aplicando um estilo visual (riscado).
Interface Reativa: A lista de tarefas na tela é atualizada dinamicamente a cada ação do usuário.

🛠️ Tecnologias Utilizadas
HTML5
CSS3
JavaScript (ES6+)

🧠 Conceitos Praticados
Este projeto foi uma oportunidade para praticar e aprofundar os seguintes conceitos de JavaScript e arquitetura de front-end:
Gerenciamento de Estado com "Fonte Única da Verdade":
Toda a aplicação é controlada por um único array de objetos (arrayTarefas). A interface do usuário (o DOM) é sempre um reflexo direto deste estado, nunca sendo manipulada diretamente. O fluxo é sempre: Ação do Usuário → Modifica o Estado (Array) → Renderiza a Tela.

Manipulação Avançada do DOM:
Criação dinâmica de elementos (document.createElement).
Uso de addEventListener com Delegação de Eventos para gerenciar todos os cliques na lista com um único ouvinte, otimizando a performance.
Uso de atributos data-* para vincular os elementos do DOM aos seus respectivos dados no array de estado, permitindo a identificação correta para as ações de remover e concluir.

Métodos Avançados de Array (Programação Funcional):
.map(): Utilizado na função principal de renderização para transformar o array de objetos de tarefas em um array de strings HTML (<li>), seguindo o padrão "Map-Join-Render".
.filter(): Utilizado na funcionalidade de exclusão para criar um novo array sem a tarefa selecionada, garantindo a imutabilidade do estado.
.map() para Atualização Imutável: O padrão de usar .map() para atualizar o status "concluída" de uma tarefa, retornando um novo array com o objeto modificado, foi praticado.

Expressões Regulares (Regex):
Utilizada para validar a entrada do usuário no formulário, garantindo que apenas caracteres válidos sejam aceitos.

🏃 Como Executar o Projeto
Clone este repositório: git clone [URL_DO_SEU_REPOSITORIO]

Navegue até a pasta do projeto: cd [NOME_DA_PASTA]

Abra o arquivo index.html no seu navegador de preferência.
