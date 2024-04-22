
const conexao = require('./conexao');

const pegarTarefas = async () => {
    const [tarefas] = await conexao.execute('SELECT * FROM tarefas');
    return tarefas;
};

const criarTarefa = async (tarefa) => {
    
    const { titulo } = tarefa;
    const dataAtual = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tarefas(titulo, status, criado_em) VALUES (?, ?, ?)';

    const [tarefaCriada] = await conexao.execute(query, [titulo, 'Pendente', dataAtual]);

    return {insertId: tarefaCriada.insertId};
};

const atualizarTarefa = async (tarefa, id) => {

    const query = 'UPDATE tarefas SET titulo = ?, status = ? WHERE id = ?';

    const { titulo, status } = tarefa;

    const tarefaAtualizada = await conexao.execute(query, [titulo, status, id]);

    return tarefaAtualizada;
};

const deletarTarefa = async (id) => {

    const tarefaExcluida = await conexao.execute('DELETE FROM tarefas WHERE id = ?', [id]);

    return tarefaExcluida;
};

module.exports = {
    pegarTarefas,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa,
};