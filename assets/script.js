/**Selecionando os Elementos */

/**Formulário de Tarefas */
const formTarefa = document.querySelector('#task-form');
const ul = document.querySelector('#tasks-list');
const input = document.querySelector('#task-input');
const checkbox = document.querySelector('#task-checkbox');
let arrayTarefas = [];

// Inicializar a página mostrando o estado vazio
document.addEventListener('DOMContentLoaded', function() {
    renderizaTarefas(arrayTarefas);
});

formTarefa.addEventListener('submit', function(e){
    const regex = /^[a-zA-Z0-9 ]+$/
    const nomeTarefa = input.value;

    /**Prevenindo o Comportamente Padrão do Form */
    e.preventDefault();
    if(regex.test(nomeTarefa)){
        const tarefaObj = {id: Date.now(), texto: nomeTarefa, concluida: false}
        arrayTarefas.push(tarefaObj);
        renderizaTarefas(arrayTarefas);
    }else{
        alert('Insira o nome da Tarefa e tente novamente!!')
    }
    input.value = '';
})

ul.addEventListener('click', function(e){
    const el = e.target;
    
    // Verificar se clicou no checkbox
    if(el.classList.contains('task-checkbox')){
        const taskItem = el.closest('.task-item');
        const taskId = Number(taskItem.dataset.id);
        
        // Encontrar a tarefa no array e alternar o estado
        const tarefa = arrayTarefas.find(t => t.id === taskId);
        if(tarefa){
            tarefa.concluida = !tarefa.concluida;
            renderizaTarefas(arrayTarefas);
        }
    }
    
    // Verificar se clicou no botão de deletar
    if(el.classList.contains('delete-btn')){
        const IdTarefa = Number(el.dataset.id)
        const novoArray = arrayTarefas.filter(function(tarefa){
            return tarefa.id !== IdTarefa;
        });
        arrayTarefas = novoArray;
        renderizaTarefas(arrayTarefas);
    }
})

/**Funções */

function renderizaTarefas(listaDeTarefas){
    ul.innerHTML = '';
    const minhasTarefas = listaDeTarefas.map(function(tarefa){
        return criaTarefa(tarefa);
    })
    ul.innerHTML = minhasTarefas.join('');
    
    // Atualizar contador de tarefas
    const totalTasksElement = document.querySelector('#total-tasks');
    if(totalTasksElement){
        totalTasksElement.textContent = listaDeTarefas.length;
    }
    
    // Mostrar/esconder estado vazio
    const emptyState = document.querySelector('#empty-state');
    if(emptyState){
        if(listaDeTarefas.length === 0){
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    }
}


function criaTarefa(nome){
    const checkboxClass = nome.concluida ? 'task-checkbox checked' : 'task-checkbox';
    const taskItemClass = nome.concluida ? 'task-item completed' : 'task-item';
    
    return `
                        <li class="${taskItemClass}" data-id="${nome.id}">
                            <div class="${checkboxClass}"></div>
                            <span class="task-text">${nome.texto}</span>
                            <div class="task-actions">
                                <button class="task-btn delete-btn" data-id="${nome.id}">🗑️</button>
                            </div>
                        </li>
    `
}