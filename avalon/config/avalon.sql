CREATE DATABASE avalon;

USE avalon;

CREATE TABLE editoras (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
cnpj VARCHAR(18) NOT NULL
);

INSERT INTO editoras (nome) VALUES ('JBC'), ('Darkside');

CREATE TABLE categorias (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL
);

INSERT INTO categorias (tipo) VALUES ('Histórias em Quadrinhos'), ('Livros');

CREATE TABLE autores (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
sobrenome VARCHAR(45) NOT NULL,
biografia VARCHAR(1000) NOT NULL,
foto VARCHAR(45) NOT NULL
);
INSERT INTO autores (nome) VALUES ('Jk rowling'), ('Darkside');

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

CREATE TABLE status (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
descricao VARCHAR(45) NOT NULL
);

CREATE TABLE livros (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
	preco DECIMAL(10,2) NOT NULL,
    acabamento VARCHAR(45) NOT NULL,
    sinopse VARCHAR(1000),
    isbn VARCHAR (13) NOT NULL UNIQUE,
    idioma VARCHAR (45) NOT NULL,
    paginas INT UNSIGNED NOT NULL UNIQUE,
    autores_id INT UNSIGNED NOT NULL,
    editoras_id INT UNSIGNED NOT NULL,
    categorias_id INT UNSIGNED NOT NULL,
    imagem VARCHAR (45) NOT NULL,
	FOREIGN KEY (autores_id) REFERENCES autores(id),
    FOREIGN KEY (editoras_id) REFERENCES editoras(id),
	FOREIGN KEY (categorias_id) REFERENCES categorias(id)
);

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

CREATE TABLE livros_estoque (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
quantidade VARCHAR(150) NOT NULL,
livros_id INT UNSIGNED NOT NULL,
livros_editoras_id INT UNSIGNED NOT NULL,
FOREIGN KEY (livros_id) REFERENCES livros (id),
FOREIGN KEY (livros_editoras_id) REFERENCES editoras (id)
);

CREATE TABLE livros_em_ofertas (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
preco DECIMAL(10,2) NOT NULL,
valor_desconto DECIMAL (10,2) NOT NULL,
validade_ofertas DATE NOT NULL,
livros_id INT UNSIGNED NOT NULL,
livros_editoras_id INT UNSIGNED NOT NULL
);