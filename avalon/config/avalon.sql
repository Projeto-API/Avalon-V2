CREATE DATABASE avalon;

USE avalon;

CREATE TABLE editoras (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL
);

INSERT INTO editoras (nome) VALUES ('Darkside'), ('Darkside');


CREATE TABLE clientes (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
sobrenome VARCHAR(45) NOT NULL,
doc_identificacao VARCHAR(11) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR(45) NOT NULL,
cep VARCHAR(9) NOT NULL,
endereco VARCHAR(45) NOT NULL,
data_nascimento DATE
);

CREATE TABLE livros (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
editoras_id INT UNSIGNED NOT NULL,
autores_id INT UNSIGNED NOT NULL,
FOREIGN KEY (editoras_id) REFERENCES editoras(id),
FOREIGN KEY (autores_id) REFERENCES autores(id)
);

INSERT INTO livros (nome, autores_id, editoras_id)
VALUES
('Harry Potter: E a Pedra Filosofal', 1, 2),
('Lady Killeres', 1, 2),
('A revolucao dos bichos', 1, 2);

DELETE FROM livros where id = 8;




CREATE TABLE itens_pedidos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
quantidade VARCHAR(150) NOT NULL,
livros_id INT UNSIGNED NOT NULL,
livros_editoras_id INT UNSIGNED NOT NULL,
FOREIGN KEY (livros_id) REFERENCES livros (id),
FOREIGN KEY (livros_editoras_id) REFERENCES editoras (id)
);

CREATE TABLE pedido (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
valor_venda DECIMAL (10,2) NOT NULL,
cupom_desconto DECIMAL (10,2) NOT NULL,
valor_total VARCHAR(45) NOT NULL,
data_pedido DATE NOT NULL,
endereco VARCHAR(45) NOT NULL,
status_id INT UNSIGNED NOT NULL,
itens_pedidos_id INT UNSIGNED NOT NULL,
itens_pedidos_livros_id INT UNSIGNED NOT NULL,
itens_pedidos_livros_editoras_id INT UNSIGNED NOT NULL,
clientes_id INT UNSIGNED NOT NULL
);

CREATE TABLE status (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
descricao VARCHAR(45) NOT NULL
);


CREATE TABLE livros_estoque (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
quantidade VARCHAR(150) NOT NULL,
livros_id INT UNSIGNED NOT NULL,
livros_editoras_id INT UNSIGNED NOT NULL,
FOREIGN KEY (livros_id) REFERENCES livros (id),
FOREIGN KEY (livros_editoras_id) REFERENCES editoras (id)
);

CREATE TABLE autores (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
sobrenome VARCHAR(45) NOT NULL,
biografia VARCHAR(1000) NOT NULL,
foto VARCHAR(45) NOT NULL
);

INSERT INTO autores set nome = 'Andre Vianco';

INSERT INTO autores (nome)
VALUES
('JK Rowling'),
('Darkside');



CREATE TABLE livros_em_ofertas (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
preco DECIMAL(10,2) NOT NULL,
valor_desconto DECIMAL (10,2) NOT NULL,
validade_ofertas DATE NOT NULL,
livros_id INT UNSIGNED NOT NULL,
livros_editoras_id INT UNSIGNED NOT NULL
);




