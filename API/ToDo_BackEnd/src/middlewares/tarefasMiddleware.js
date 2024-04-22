
const validarTitulo = (request, response, next) => {
    const { body } = request;    

    if(body.titulo == undefined) {
        return response.status(400).json({ message: 'O capo "titulo" é obrigatório'});
    }

    if(body.titulo == '') {
        return response.status(400).json({ message: 'O capo "titulo" não pode estar vazio'});

    }
    next();
};

const validarStatus = (request, response, next) => {
    const { body } = request;    

    if(body.status == undefined) {
        return response.status(400).json({ message: 'O capo "status" é obrigatório'});
    }

    if(body.status == '') {
        return response.status(400).json({ message: 'O capo "status" não pode estar vazio'});

    }
    next();
};

module.exports = {
    validarTitulo,
    validarStatus
};