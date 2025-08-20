//Atualizando Nome, CPF e RG de uma aluno
db[collection].updateOne(
    {"cod_aluno": "A002"},
    {$set: {nome: "Bruno Soares", cpf: "999.999.999-99", rg: "00.000.000-0"}}
)

//Deletando um aluno 
db[collection].deleteOne({"cod_aluno": "A005"});