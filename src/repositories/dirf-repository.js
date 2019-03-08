'use strict';

const db = require('../services/database-service');

exports.get = async (data) => {
    const res = await db.comandText(`SELECT D.*, 
                                           (SELECT F.DATAADMISSAO 
                                              FROM VW_SCF_FUNCIONARIO_RM F 
                                             WHERE F.CHAPA = D.CHAPA
                                           ) AS DATAADMISSAO 
                                      FROM DIRF D 
                                     WHERE D.CHAPA = '${data.chapa}' AND D.ANO = ${data.ano}
                                     ORDER BY DATAADMISSAO DESC`);  
    return res.rows;
}

