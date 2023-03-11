CREATE DATABASE avalon;

USE avalon;

CREATE TABLE editoras (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    cnpj CHAR(14) NOT NULL
);

CREATE TABLE categorias (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL
);

CREATE TABLE autores (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
	sobrenome VARCHAR(45) NOT NULL,
    biografia VARCHAR(1000) NOT NULL,
    foto VARCHAR(45) NOT NULL
);

CREATE TABLE status_produto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(45) NOT NULL
);

CREATE TABLE clientes (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
	sobrenome VARCHAR(45) NOT NULL,
    doc_identificacao VARCHAR(11) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR (150) NOT NULL UNIQUE,
    senha VARCHAR (45) NOT NULL UNIQUE,
    foto VARCHAR(45) NOT NULL,
    cep CHAR(9),
	endereco VARCHAR(45),
    data_nascimento DATE
);

CREATE TABLE produtos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
	preco DECIMAL(10,2) NOT NULL,
    acabamento VARCHAR(45) NOT NULL,
    sinopse VARCHAR(1000),
    isbn VARCHAR (13) NOT NULL UNIQUE,
    idioma VARCHAR (45) NOT NULL,
    paginas INT UNSIGNED NOT NULL UNIQUE,
    editoras_id INT UNSIGNED NOT NULL,
    categorias_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (editoras_id) REFERENCES editoras(id),
	FOREIGN KEY (categorias_id) REFERENCES categorias(id)
);

CREATE TABLE produtos_estoque (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    quantidade_produto INT NOT NULL,
    produtos_id INT UNSIGNED NOT NULL,
	produtos_editoras_id INT UNSIGNED NOT NULL,
   	FOREIGN KEY (produtos_id) REFERENCES produtos(id),
    FOREIGN KEY (produtos_editoras_id) REFERENCES produtos(editoras_id)
);

CREATE TABLE produtos_has_autores (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    produtos_id INT UNSIGNED NOT NULL,
	autores_id INT UNSIGNED NOT NULL,
   	FOREIGN KEY (produtos_id) REFERENCES produtos(id),
    FOREIGN KEY (autores_id) REFERENCES autores(id)
);

CREATE TABLE itens_pedidos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    quantidades INT UNSIGNED NOT NULL,
	produtos_id INT UNSIGNED NOT NULL,
    produtos_editoras_id INT UNSIGNED NOT NULL,
    produtos_categorias_id INT UNSIGNED NOT NULL,
	pedidos_id INT UNSIGNED NOT NULL,
    pedidos_status_produto_id INT UNSIGNED NOT NULL,
    pedidos_clientes_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (produtos_id) REFERENCES produtos(id),
    FOREIGN KEY (produtos_editoras_id) REFERENCES produtos(editoras_id),
    FOREIGN KEY (produtos_categorias_id) REFERENCES produtos(categorias_id),
    FOREIGN KEY (pedidos_id) REFERENCES pedidos(id),
    FOREIGN KEY (pedidos_status_produto_id) REFERENCES pedidos(status_produto_id),
    FOREIGN KEY (pedidos_clientes_id) REFERENCES pedidos(clientes_id)
);

CREATE TABLE pedidos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    valor_venda DECIMAL(10,2) NOT NULL,
	cupom_desconto DECIMAL(10,2) NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    data_pedido DATE NOT NULL,
    endereco_alternativo VARCHAR(45),
    status_produto_id INT UNSIGNED NOT NULL,
    clientes_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (status_produto_id) REFERENCES status_produto(id),
    FOREIGN KEY (clientes_id) REFERENCES clientes(id)
    );
