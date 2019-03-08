'use strict';

const db = require('../services/database-service');

exports.getLogIN = async (data) => {   
    const res = await db.comandText(`SELECT DISTINCT USUARIO, DT_NASCIMENTO, PIS 
                                       FROM DIRF
                                      WHERE 1=1                                                              
                                        AND USUARIO = '${data.USUARIO}'  
                                        AND PIS = '${data.PIS}' 
                                        AND DT_NASCIMENTO = '${data.DT_NASCIMENTO}'`);
    return res.rows[0];
}

exports.getExercicios = async (data) => {   
  const res = await db.comandText(`SELECT CHAPA, ANO 
                                     FROM DIRF
                                    WHERE 1=1                                                              
                                      AND USUARIO = '${data.USUARIO}'  
                                      AND PIS = '${data.PIS}' 
                                      AND DT_NASCIMENTO = '${data.DT_NASCIMENTO}'`);
  return res.rows;
}