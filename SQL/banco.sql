-- BANCO DE DADOS MySQL - usando WAMPSERVER na pasta models > db.js, se quiser alterar so trocar la na pasta

-- OBRIGATORIO DIGITAR ESSES DOIS COMANDOS
CREATE DATABASE application;
USE application;

-- EM SEGUIDA IR NA PASTA models > Post.js e tirar o comentario na funcao seguinte // Post.sync({force:true});

--ESSE COMANDO DA PASTA Post vai criar as tabelas necessarias para o uso de forma automatica, o resto so observar o banco de dados com os comandos abaixo

-- VISUALIZAR
SHOW TABLES;
DESC usuarios;
SELECT * FROM usuarios;
