'use strict';

const repository = require('../repositories/autenticacao-repository');
const authService = require('../services/auth-service');

exports.post = async (req, res, next) => {
    try {       
     
         // Obtém dados do usuário
        let usuario = await repository.getLogIN({
            USUARIO: req.body.USUARIO,
            PIS: req.body.PIS,
            DT_NASCIMENTO: req.body.DT_NASCIMENTO
        });

        // Verificar se autenticação
        if (!usuario) {
            res.status(404).send([{
                COD: 404,              
                MSN: 'Usuário não existe'
            }]);
            return;
        }    
        
         // Retornar os exercícios e matrículas do usuário
         let exercicios = await repository.getExercicios({
            USUARIO: usuario.USUARIO,
            PIS: usuario.PIS,
            DT_NASCIMENTO: usuario.DT_NASCIMENTO
        });   

        const token = await authService.encodeToken({
            USUARIO: usuario.USUARIO,
            PIS: usuario.PIS,
            DT_NASCIMENTO: usuario.DT_NASCIMENTO
        });

        res.status(201).send({
            TOKEN: token,
            EXERCICIOS: exercicios
        });
       
    } catch (e) {       
        res.status(500).send([{           
            COD: 500,
            MSN: 'Falha ao processar requisição'
        }]);
    }
};