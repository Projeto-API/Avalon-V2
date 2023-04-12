CREATE DATABASE avalon;

USE avalon;

CREATE TABLE editoras (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
cnpj VARCHAR(18) NOT NULL
);

INSERT INTO editoras (nome, cnpj) VALUES 
('JBC', '00.531.662/0001-98'),
('Darkside','17.285.159/0001-00'),
('Pipoca e Nanquim', '27.286.425/0001'),
('Elefante','12.097.348/0001-28'),
('HarperCollins Brasil', '22.016.633/0001-20'),
('Rocco', '42.444.703/0004'),
('Panini', '58.732.058/0002-90'),
('Gente', '74.514.316/0001'),
('Editora 34', '32.081.580/0001-85');

CREATE TABLE categorias (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL);

INSERT INTO categorias (tipo) VALUES ('Histórias em Quadrinhos'), ('Livros');

CREATE TABLE autores (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
biografia VARCHAR(1000) NOT NULL,
foto VARCHAR(45) NOT NULLtipo
);

CREATE TABLE carrinho (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
titulo VARCHAR(150) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
quantidade INT UNSIGNED NOT NULL,
imagem VARCHAR(45) NOT NULL
);

CREATE TABLE clientes (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
sobrenome VARCHAR(45) NOT NULL,
doc_identificacao VARCHAR(11) NOT NULL,
email VARCHAR(150) NOT NULL,
password VARCHAR(45) NOT NULL,
cep VARCHAR(9) NOT NULL,
endereco VARCHAR(45) NOT NULL,
data_nascimento VARCHAR(11),
foto VARCHAR(45)
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
    paginas INT UNSIGNED NOT NULL,
    autores_id INT UNSIGNED NOT NULL,
    editoras_id INT UNSIGNED NOT NULL,
    categorias_id INT UNSIGNED NOT NULL,
	FOREIGN KEY (autores_id) REFERENCES autores(id),
    FOREIGN KEY (editoras_id) REFERENCES editoras(id),
	FOREIGN KEY (categorias_id) REFERENCES categorias(id)
);

INSERT INTO livros (titulo, preco, acabamento, sinopse, isbn, idioma, ano, paginas, autores_id, editoras_id, categorias_id)VALUES 
('MY Broken Mariko', '39,90', 'Capa Comum', 'Tomoyo Shiino apoiou sua amiga Mariko durante anos de abuso, abandono e depressão. Por mais horríveis que sejam suas circunstâncias, a amizade delas tem sido a única constante reconfortante na vida de Mariko e na de Tomoyo também. Certo dia, Tomoyo é surpreendida pela notícia da morte de Mariko. Em estado de choque, ela decide descobrir o motivo pelo qual sua amiga cometeu suicídio.',
'9786555942491', 'Português', 2022,  200, 1, 1, 1),
('Lady Killers: Assassinas em Série', '79,90', 'Capa Dura', 'Quando pensamos em assassinos em série, pensamos em homens. Mais precisamente, em homens matando mulheres inocentes, vítimas de um apetite atroz por sangue e uma vontade irrefreável de carnificina. As mulheres podem ser tão letais quanto os homens e deixar um rastro de corpos por onde passam ― então o que acontece quando as pessoas são confrontadas com uma assassina em série? Quando as ideias de “sexo frágil” se quebram e fitamos os desconcertantes olhos de uma mulher com sangue seco sob as unhas? Prepare-se para realizar mais uma investigação criminal ao lado da DarkSide® Books e sua divisão Crime Scene®. Esqueça tudo aquilo que você achava que sabia sobre assassinos letais ― perto de Mary Ann Cotton e Elizabeth Báthory, para citar apenas algumas, Jack, o Estripador ainda era um aprendiz. Inspirado na coluna homônima da escritora Tori Telfer no site Jezebel, Lady Killers: Assassinas em Série é um dossiê de histórias sobre assassinas em série e seus crimes ao longo dos últimos séculos, e o material perfeito para você mergulhar fundo em suas mentes. Com um texto informativo e espirituoso, a autora recapitula a vida de catorze mulheres com apetite para destruição, suas atrocidades e o legado de dor deixado por cada uma delas.',
'9788594541475 ', 'Português', 2019, 384, 2, 2, 2),
('Moby Dick' , '120,00', 'Capa Dura', 'Moby Dick é um verdadeiro triunfo do premiado artista francês Christophe Chabouté, aclamada como a mais impressionante adaptação desse clássico da literatura para os quadrinhos. A epopeia do obcecado capitão Ahab em busca do cachalote branco é recontada de forma magistral pelas mãos de um mestre, que optou por conservar o texto original de Herman Melville, transformando-o numa primorosa narrativa gráfica. Prepare-se para a emocionante caçada à maior das criaturas do mar, ao lado do narrador Ismael, do misterioso aborígene Queequeg e de uma tripulação que oferece o próprio sangue para seu capitão em troca da promessa de glória e ouro, sem saber que, na verdade, o que os aguarda é a desgraça e o infortúnio!',
'9788593695025 ', 'Português', 2022, 256, 3, 3, 1),
('Calibã e a bruxa', '69,90', 'Capa Comum', 'As acadêmicas feministas desenvolveram um esquema interpretativo que lança bastante luz sobre duas questões históricas muito importantes: como explicar a execução de centenas de milhares de "bruxas" no começo da Era Moderna, e por que o surgimento do capitalismo coincide com essa guerra contra as mulheres. Segundo esse esquema, a caça às bruxas buscou destruir o controle que as mulheres haviam exercido sobre sua própria função reprodutiva, e preparou o terreno para o desenvolvimento de um regime patriarcal mais opressor. Essa interpretação também defende que a caça às bruxas tinha raízes nas transformações sociais que acompanharam o surgimento do capitalismo. No entanto, as circunstâncias históricas específicas em que a perseguição às bruxas se desenvolveu ― e as razões pelas quais o surgimento do capitalismo exigiu um ataque genocida contra as mulheres ― ainda não tinham sido investigadas. Essa é a tarefa que empreendo em Calibã e a bruxa, começando pela análise da caça às bruxas no contexto das crises demográfica e econômica europeias dos séculos XVI e XVII e das políticas de terra e trabalho da época mercantilista.',
'9788593115035 ', 'Português', 2019, 460, 4, 4, 2),
('O Senhor dos Anéis: A Sociedade do Anel', '69,90', 'Capa Dura', 'O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real.',
'9788595084759 ', 'Português', 2019, 576, 5, 5, 2),
('O Senhor dos Anéis: As Duas Torres', '69,90', 'Capa Dura', 'O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, e destruir o Um Anel, no qual está contida a maior parte do poder do tirano demoníaco imaginado por J.R.R. Tolkien.',
'9788595084766', 'Português', 2019, 464, 5, 5, 2),
('O Senhor dos Anéis: O Retorno do Rei', '69,90', 'Capa Dura', 'A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As batalhas grandiosas que estão prestes a acontecer, no entanto, são apenas o pano de fundo para o verdadeiro drama: a missão quase suicida dos hobbits Frodo e Sam, que tentam destruir o Um Anel, fonte do poder de Sauron, infiltrando-se no coração do território do Inimigo. ',
'9788595084773', 'Português', 2019, 528, 5, 5, 2),
('Harry Potter e a Pedra Filosofal', '69,90', 'Capa Dura', 'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.',
'9788532530783', 'Português', 2017, 208, 6, 6, 2),
('Boa Noite Punpun - Vol. 1', '49,90', 'Capa Comum', 'Punpun Onodera é um garoto normal, que vive feliz com sua família. Um dia, Aiko Tanaka é transferida para a sua escola. Foi paixão à primeira vista!! Voltando juntos para casa, ela conta que no futuro, “a Terra vai se tornar um planeta inabitável”. É nessa hora que Punpun decide ser um cientista espacial. Porém, bem quando encontra seu objetivo na vida, a sua realidade começa a desmoronar. Considerado por muitos como a obra-prima do aclamado Inio Asano, Boa Noite Punpun é um slice of life que trata de temas delicados como solidão, relações familiares conturbadas e depressão.',
'9788545709619', 'Português', 2023, 432, 7, 1, 1),
('Berserk - Vol. 2', '34,90', 'Capa Comum', 'Guts se depara com o Behelit, uma misteriosa pedra que pode invocar os God Hand, os terríveis senhores da escuridão, que ele deseja encontrar para completar sua vingança. Mas o Conde, senhor do feudo e tirano que ameaça o povo com a "caça aos hereges", também parece ter relação com a pedra e os God Hand. Guts declara guerra ao Conde e invade seu castelo, deixando um rastro de sangue por onde passa. ',
'9788542601749', 'Português', 2022, 240, 8, 7, 1),
('DNA Milionário', '54,90', 'Capa Comum', 'Através da reprogramação mental e de DNA, o ser humano é capaz de conquistar tudo o que deseja em sua vida: paz, saúde, felicidade, tranquilidade e até dinheiro. Tudo isso faz parte da física quântica, das Leis do Universo e do poder da energia, e é possível para todos, mas é preciso se dedicar, acreditar e entrar em equilíbrio. Com o Modelo Quantum Hertz Ourives, você será capaz de sair do looping de negatividade, pensamentos ruins, frustrações, traições e desamparo para uma vida maravilhosa, positiva e feliz. A partir da Técnica Hertz, no Modelo Quantum Hertz Ourives, você aprenderá todos os segredos para elevar a frequência vibracional, reprogramar quanticamente seu DNA escapando das energias ruins e elevar o seu potencial energético a nível de Universo, alcançando alta frequência para entrar em ressonância com todos os seus sonhos numa troca de energia e magnetizando as vontades do seu coração. Você é capaz de viver e ter tudo o que sempre quis, e neste livro Elainne Ourives lhe ensina: • Como eliminar as barreiras da prosperidade; • Os 7 princípios da cocriação da riqueza; • Como vibrar em sintonia com a energia do Universo; • Os 10 passos para a cocriação de sua realidade; • Como desbloquear o acesso à energia da riqueza; • Como reprogramar o seu DNA para um código milionário; E muito mais.',
'9788545202967', 'Português', 2019, 288, 9, 8, 2),
('Crime e Castigo', '113,00', 'Capa Comum', 'Publicado em 1866, Crime e castigo é a obra mais célebre de Fiódor Dostoiévski. Neste livro, Raskólnikov, um jovem estudante, pobre e desesperado, perambula pelas ruas de São Petersburgo até cometer um crime que tentará justificar por uma teoria: grandes homens, como César ou Napoleão, foram assassinos absolvidos pela História. Este ato desencadeia uma narrativa labiríntica que arrasta o leitor por becos, tabernas e pequenos cômodos, povoados de personagens que lutam para preservar sua dignidade contra as várias formas da tirania. Esta é a primeira tradução direta da obra lançada no Brasil, e recebeu em 2002 o Prêmio Paulo Rónai de Tradução da Fundação Biblioteca Nacional.',
'9788573266467', 'Português', 2016, 592, 10, 9, 2);

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

ALTER TABLE livros DROP INDEX `paginas`;

ALTER TABLE livros ADD capa VARCHAR(45) NOT NULL;
ALTER TABLE livros add imagens VARCHAR(45) NOT NULL;
ALTER TABLE livros add ano INT NOT NULL;

ALTER TABLE usuarios rename column tipo TO admin;

ALTER TABLE usuarios ADD genero VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD estado VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD cidade VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD numero VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD complemento VARCHAR(45);
ALTER TABLE usuarios ADD tipo INT;

CREATE TABLE lancamentos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL
);

ALTER TABLE livros DROP INDEX `paginas`;

ALTER TABLE livros ADD capa VARCHAR(45) NOT NULL;
ALTER TABLE livros add imagens VARCHAR(45) NOT NULL;
ALTER TABLE livros add ano INT NOT NULL;

-- adicionado mais campos em usuarios

ALTER TABLE usuarios ADD genero VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD estado VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD cidade VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD numero VARCHAR(45) NOT NULL;
ALTER TABLE usuarios ADD complemento VARCHAR(45);
ALTER TABLE usuarios ADD tipo INT;

INSERT INTO autores (nome, biografia, foto) VALUES
('Emily Bronte', 'Emily Jane Brontë nasceu em Thornton, no dia 30 de julho de 1818 e faleceu em Haworth, vítima de tuberculose, em 19 de dezembro de 1848 com apenas 30 anos. Deixou um único romance, O Morro dos Ventos Uivantes, considerado um dos grandes clássicos da literatura mundial. Era a irmã mais velha das irmãs Carlotte, Emily e Anne Brontë que, ao lado do irmão Branwell, cresceram no remoto vilarejo rural de Haworth, em Yorkshire. O ambiente, segundo Charlote escreveu mais tarde ao recordar a infância, tinha poucos atrativos para as crianças: Dependíamos totalmente de nós mesmos e uns dos outros, dos livros e do estudo para encontrar diversões e ocupações na vida. O estímulo mais elevado, bem como o prazer mais vivo, que conhecemos da infância em diante residia em nossos primeiros esforços na composição literária', 'emily-bronte.jpg'),
('Victor Hugo', 'Victor-Marie Hugo foi um romancista, poeta, dramaturgo, ensaísta, artista, estadista e ativista pelos direitos humanos francês de grande atuação política em seu país. É autor de Les Misérables e de Notre-Dame de Paris, entre diversas outras obras clássicas de fama e renome mundial.', 'victor-hugo.jpg');

INSERT INTO editoras (nome, cnpj) VALUES
('Editora Antofágica', '32.193.802/0001-51'),
('Martin Claret', '32.193.802/0001-51');

INSERT INTO livros (titulo, preco, acabamento, sinopse, isbn, idioma, ano, paginas, autores_id, editoras_id, categorias_id, capa) VALUES
('O Morro dos Ventos Uivantes', '89,90', 'Capa Dura', 'Ainda que contada por diversos narradores e muitos pontos de vista, nenhum ângulo é capaz de deixar a história do Morro dos Ventos Uivantes menos sórdida. Lá, não há santos ou demônios: todos são repletos de virtudes e pecados. E não podemos garantir que não haverá um ou outro fantasma vagando pela charneca…Ao voltar de uma viagem, o pai da família Earnshaw não traz consigo os presentes que os filhos lhe pediram ― em vez disso, traz um garotinho perdido de pele escura, que encontrou vagando no porto. O menino ganha um nome ― Heathcliff ―, mas jamais um sobrenome, o primeiro dos atributos da família a que ele não terá acesso. Catherine é a única a acolhê-lo, e essa relação, repleta de amor, obsessão e vingança, atravessa gerações e não é detida nem mesmo pela morte.Nossa edição conta com ilustrações de Janaina Tokitaka e nova tradução de Stephanie Fernandes, que também assina um ensaio sobre sua experiência com a obra.',
' 9786586490299', 'Português', 2022, 484, 30, 18, 2, 'capa-morro.jpg'),
('Os Miseráveis', '159,90', 'Capa Dura', 'Um clássico da literatura mundial, esta obra é uma poderosa denúncia a todos os tipos de injustiça humana. Narra a emocionante história de Jean Valjean ― o homem que, por ter roubado um pão, é condenado a dezenove anos de prisão. Os miseráveis é um livro inquietantemente religioso e político, com uma das narrativas mais envolventes já criadas.',
'9788544000007', 'Português', 2014, 1511, 31, 19, 2, 'capa-miseraveis.jpg'),
('O Hobbit', '69,90', 'Capa Dura', 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.
Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.',
'9788595084742', 'Português', 2019,336, 5, 5, 2, 'hobbit-capa.jpg'),
('Solitário', '79,90', 'Capa Dura', 'Mais uma graphic novel do mestre ilustrador e contador de histórias Christophe Chabouté (Moby Dick, Um Pedaço de Madeira e Aço) chega ao Brasil pela editora Pipoca & Nanquim, em um volume único de 380 páginas. Best-seller mundial e uma das obras selecionadas pelo prestigiado Festival Internacional de Quadrinhos de Angoulême, sediado na França, Solitário nos apresenta uma história surpreendente e emocionante, em que sonho e vida cotidiana se mesclam com sensibilidade sutil, ternura e humor. Em um pequeno farol numa ilhota afastada do resto do mundo, um eremita experimenta uma vida rodeada de solidão. Morador do lugar desde que nasceu, há 50 anos, a rocha é seu navio de granito; uma embarcação imóvel e segura que não o leva a lugar algum e que jamais chegará a nenhum porto... Afinal, por que sair dali, se o mundo além desse horizonte é tão assustador? Para onde fugir quando não há lugar para ir? Como combater o isolamento e evitar que o silêncio perpétuo se torne ensurdecedor? Anos passados em sua rocha, recebendo comida do mar e tendo a imaginação como única companheira... Até agora. Quando um marinheiro novato começa a trabalhar no barco que toda semana leva provisões para o Solitário, ele passa a fazer perguntas que toda a população dos arredores evitou ao longo de uma vida: quem é esse homem? Por que ele se esconde? Por que nunca saiu do farol? Como é viver com tanta... solidão? Uma simples e pequena atitude será o bastante para dar início a uma sucessão de eventos que golpearão irrevogavelmente a existência serena do ermitão. Repleto de belíssimas ilustrações em preto e branco de tirar o fôlego, Solitário é uma obra-prima de Chabouté — uma história inesquecível que retrata de forma impecável como alguém pode ter sua vida tolhida a ponto de se tornar uma sombra e como uma sombra pode reclamar sua identidade e se tornar alguém.',
'9788593695285', 'Português', 2019, 308, 3,3,1, 'solitario-capa.jpg'),
('Nijigahara Holograph', '39,90', 'Capa Comum', 'Com palco no terreno chamado Nijigahara, o passado e o presente dos alunos de uma escola se entrelaçam intensamente. O boato sobre o monstro que vive no túnel, o segredo que cada família carrega, um “surto” de borboletas que infestam a cidade… Através dos infindáveis eventos e “linhas do destino”, o mestre Inio Asano convida o leitor para adentrar um mundo nunca antes visto.',
'9788545701903', 'Português', 2016, 200, 7, 1, 1, 'nijigahara-capa.jpg'),
('Boa Noite Punpun - Vol. 2', '49,90', 'Capa Comum', 'Depois que seu pai foi embora, Punpun começou a morar com a mãe e o tio Yuuichi. O garoto, agora no ginasial, está na mesma classe que seus amigos. Porém, ele não está mais falando com Aiko, a garota por quem era apaixonado desde pequeno. Ela começou a sair com um veterano do clube de badminton e, agora, a vida de Punpun virou um verdadeiro inferno!!',
'9788545709602', 'Português', 2023, 432, 7, 1, 1, 'punpun2-capa.jpg'),
('Boa Noite Punpun - Vol. 3', '49,90', 'Capa Comum', 'Depois de um ginásio sem muitas emoções, Punpun agora é um estudante colegial. Porém, o tio Yuuichi continua desaparecido!! O que o garoto, sua mãe e Midori farão?! Enquanto planejavam sua mudança e procuravam pelo tio, um incidente faz a vida de Punpun se transformar aos poucos…',
'9788545710608', 'Português', 2023, 448,7,1, 1, 'punpun3-capa.jpg'),
('Berserk - Vol. 3', '34,90', 'Capa Comum', 'A batalha contra o Conde continua e se encaminha para um final inesperado. O despertar do Behelit acarreta a aparição dos God Hand, e entre eles está Griffith, que invoca a ira de Guts por lembranças de seu passado! Qual será a relação entre eles?',
'978-8542601794', 'Português', 2022, 240, 8, 7, 1, 'berserk3-capa');



INSERT INTO imagem_produto ( imagens, livros_id) VALUES 
('hobbit1.jpeg', 57),
('hobbit2.jpeg', 57),
('hobbit3.jpeg', 57),
('MORRO1.jpg', 55),
('MORRO2.jpg', 55),
('MORRO3.jpg', 55),
('MORRO4jpg', 55),
('mariko-1.jpg',1),
('mariko-2.jpg',1),
('mariko-3.jpg',1),
('solitario1.jpg', 58),
('solitario2.jpg', 58),
('solitario3.jpg', 58),
('miseraveis1.jpeg', 56),
('miseraveis2.jpeg', 56),
('miseraveis3.jpeg', 56),
('moby1.jpg', 3),
('moby2.jpg', 3),
('moby3.jpg', 3),
('moby4.jpg', 3);












