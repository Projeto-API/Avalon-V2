
CREATE DATABASE avalon1;

USE avalon1;

CREATE TABLE avalon1.carrinho (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
imagem  VARCHAR(150) NOT NULL,
titulo VARCHAR(150) NOT NULL,
preco  DECIMAL(12)NOT NULL,
quantidade INTEGER NOT NULL
);


INSERT INTO avalon1.carrinho
(imagem,titulo,preco, quantidade)
VALUES("/carrinho/public/images/1661966653.webp", "teste01", 32.00, 1)
VALUES("/carrinho/public/images/produtos/calibã/caliba-capa.jpg", "teste01", 32.00, 1)