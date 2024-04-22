

const tarefasModel = require('../models/tarefasModel');

const pegarTarefas = async (request, response) => {

    const tarefas = await tarefasModel.pegarTarefas();

    return response.status(200).json(tarefas);
}

const criarTarefa = async (request, response) => {

    const tarefaCriada = await tarefasModel.criarTarefa(request.body);

    return response.status(201).json();
};


const atualizarTarefa = async (request, response) => {

    const { id } = request.params;

    const tarefaAtualizada = await tarefasModel.atualizarTarefa(request.body, id);

    return response.status(204).json();
};

const deletarTarefa = async (request, response) => {

    const { id } = request.params;

    const tarefaExcluida = await tarefasModel.deletarTarefa(id);

    return response.status(204).json();
};

module.exports = {
    pegarTarefas,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa
};
