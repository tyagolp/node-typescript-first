#Commands


Arquitetura Solid/TDD


*docker-compose*

docker-compose up => inicia o docker

docker-compose up -d => inicia o docker em background

docker-compose down => derruba o conteiner

docker-compose up --force-recreate => inicia o docker e força a re criação do container 

docker-compose start

docker-compose stop

docker-compose restart


*typeorm*

yarn typeorm migrate:create -n NOME_MIGRATION => criar um arquivo de migration com o nome 'NOME_MIGRATION'

yarn typeorm migrate:run => Executa todas as migrations 


#Atalhos

ctrl + . => Implementa a interface na classe atual