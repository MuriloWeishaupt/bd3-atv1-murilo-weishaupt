const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database)

//Listando um aluno pelo CPF, sem o campo "cod_aluno"
db[collection].find({"cpf": "753.159.846-00"}, {"cod_aluno": 0});