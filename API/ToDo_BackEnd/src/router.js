
const express = require('express');
const router = express.Router();
const tarefasController = require('./controllers/tarefasController');
const tarefasMiddleWare = require('./middlewares/tarefasMiddleware');

router.get('/tarefas', tarefasController.pegarTarefas);
router.post('/tarefas', tarefasMiddleWare.validarTitulo, tarefasMiddleWare.validarStatus, tarefasController.criarTarefa);
router.put('/tarefas/:id', tarefasMiddleWare.validarTitulo, tarefasMiddleWare.validarStatus, tarefasController.atualizarTarefa);
router.delete('/tarefas/:id', tarefasController.deletarTarefa);

module.exports = router;