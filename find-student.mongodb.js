const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database)

db['bd3-nosql-atv1'].find({"cpf": "753.159.846-00"}, {"cod_aluno": 0});