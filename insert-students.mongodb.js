const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database)

db['bd3-nosql-atv1'].insertMany(
[
  {
    "cod_aluno": "A001",
    "cod_turma": "T101",
    "nome": "Ana Clara Silva",
    "cpf": "123.456.789-00",
    "rg": "12.345.678-9",
    "telefone_aluno": "(11) 91234-5678",
    "telefone_responsavel": "(11) 99876-5432",
    "email": "ana.clara@email.com",
    "data_nascimento": "2008-05-12"
  },
  {
    "cod_aluno": "A002",
    "cod_turma": "T101",
    "nome": "Bruno Henrique Alves",
    "cpf": "987.654.321-00",
    "rg": "98.765.432-1",
    "telefone_aluno": "(21) 92345-6789",
    "telefone_responsavel": "(21) 93456-7890",
    "email": "bruno.henrique@email.com",
    "data_nascimento": "2007-09-20"
  },
  {
    "cod_aluno": "A003",
    "cod_turma": "T102",
    "nome": "Carolina Mendes Rocha",
    "cpf": "456.789.123-00",
    "rg": "45.678.912-3",
    "telefone_aluno": "(31) 93456-7890",
    "telefone_responsavel": "(31) 98765-4321",
    "email": "carolina.rocha@email.com",
    "data_nascimento": "2009-03-08"
  },
  {
    "cod_aluno": "A004",
    "cod_turma": "T102",
    "nome": "Daniel Souza Pereira",
    "cpf": "321.654.987-00",
    "rg": "32.165.498-7",
    "telefone_aluno": "(41) 94567-8901",
    "telefone_responsavel": "(41) 97654-3210",
    "email": "daniel.pereira@email.com",
    "data_nascimento": "2006-11-30"
  },
  {
    "cod_aluno": "A005",
    "cod_turma": "T103",
    "nome": "Eduarda Lima Ferreira",
    "cpf": "654.321.987-00",
    "rg": "65.432.198-5",
    "telefone_aluno": "(51) 95678-9012",
    "telefone_responsavel": "(51) 96543-2109",
    "email": "eduarda.lima@email.com",
    "data_nascimento": "2008-01-25"
  },
  {
    "cod_aluno": "A006",
    "cod_turma": "T103",
    "nome": "Felipe Andrade Costa",
    "cpf": "789.123.456-00",
    "rg": "78.912.345-6",
    "telefone_aluno": "(61) 96789-0123",
    "telefone_responsavel": "(61) 94321-0987",
    "email": "felipe.costa@email.com",
    "data_nascimento": "2007-07-14"
  },
  {
    "cod_aluno": "A007",
    "cod_turma": "T104",
    "nome": "Giovana Ribeiro Martins",
    "cpf": "159.753.486-00",
    "rg": "15.975.348-6",
    "telefone_aluno": "(71) 97890-1234",
    "telefone_responsavel": "(71) 93210-9876",
    "email": "giovana.martins@email.com",
    "data_nascimento": "2009-12-02"
  },
  {
    "cod_aluno": "A008",
    "cod_turma": "T104",
    "nome": "Henrique Lima Batista",
    "cpf": "753.159.846-00",
    "rg": "75.315.984-6",
    "telefone_aluno": "(81) 98901-2345",
    "telefone_responsavel": "(81) 95432-1987",
    "email": "henrique.batista@email.com",
    "data_nascimento": "2006-06-18"
  },
  {
    "cod_aluno": "A009",
    "cod_turma": "T105",
    "nome": "Isabela Souza Gomes",
    "cpf": "852.963.741-00",
    "rg": "85.296.374-1",
    "telefone_aluno": "(91) 99012-3456",
    "telefone_responsavel": "(91) 98712-3456",
    "email": "isabela.gomes@email.com",
    "data_nascimento": "2008-10-10"
  },
  {
    "cod_aluno": "A010",
    "cod_turma": "T105",
    "nome": "João Pedro Fernandes",
    "cpf": "147.258.369-00",
    "rg": "14.725.836-9",
    "telefone_aluno": "(85) 90123-4567",
    "telefone_responsavel": "(85) 97654-3210",
    "email": "joao.fernandes@email.com",
    "data_nascimento": "2007-04-05"
  }
]
)