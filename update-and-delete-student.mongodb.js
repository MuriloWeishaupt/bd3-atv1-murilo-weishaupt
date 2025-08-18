const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database)

// db['bd3-nosql-atv1'].update(
//     {"cod_aluno": "A002"},
//     {$set: {nome: "Bruno Soares", cpf: "999.999.999-99", rg: "00.000.000-0"}}
// )

db['bd3-nosql-atv1'].deleteOne({"cod_aluno": "A005"});