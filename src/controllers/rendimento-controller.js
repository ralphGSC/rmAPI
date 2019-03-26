'use strict';

const repository = require('../repositories/rendimento-repository');

exports.get = async(req, res, next) => {
    try {       
        var data = await repository.get({
            chapa: req.params.chapa, 
            ano: req.params.ano
           }); 
        res.status(200).send(data);
    } catch (e) {      
        res.status(500).send([{
            COD: 500,
            MSN: 'Falha ao processar requisição'
        }]);
    }
}