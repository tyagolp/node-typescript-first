# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro

**RN**
Não deve ser possivel cadastrar um carro com uma placa ja existente
O carro deve ser cadastrado pro padrão com disponibilidade
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponiveis
Deve ser possível listar todos os carros disponiveis pelo nome da categoria
Deve ser possível listar todos os carros disponiveis pelo nome da marca
Deve ser possível listar todos os carros disponiveis pelo nome da carro

**RN**
O usuario não precisa estar logado no sistema


# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todos os especificações disponiveis

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel cadastrar uma especificação já existente já existente para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador


# Cadastro de imagens no carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador



# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro