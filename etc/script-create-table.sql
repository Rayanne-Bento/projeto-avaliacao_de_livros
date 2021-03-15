/* Lógico_1: */

CREATE TABLE Usuario (
    id serial,
    email varchar,
    user_name varchar,
    nascimento date,
    nome varchar,
    CONSTRAINT usuario_pk PRIMARY KEY (id)
);

CREATE TABLE Autor (
    id serial,
    mini_bio varchar,
    nascimento date,
    nome varchar,
    CONSTRAINT autor_pk PRIMARY KEY (id)
);

CREATE TABLE Livro (
    ISBN serial,
    titulo varchar ,
    editora varchar,
    ano integer,
    paginas integer,
    sinopse varchar,
    CONSTRAINT livro_pk PRIMARY KEY (ISBN)
);

CREATE TABLE Categoria (
    id serial,
    CONSTRAINT categoria_pk PRIMARY KEY (id)
);

CREATE TABLE Avaliacao (
    id serial,
    nota integer,
    comentario varchar,
    resenha varchar,
    status_leitura varchar,
    id_usuario integer,
    ISBN_livro integer,
    CONSTRAINT avaliacao_pk PRIMARY KEY (id),
    CONSTRAINT avaliacao_usuario_fk FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
        ON DELETE RESTRICT,
    CONSTRAINT avaliacao_livro_fk FOREIGN KEY (ISBN_livro) REFERENCES Livro (ISBN)
        ON DELETE RESTRICT
);

CREATE TABLE escreve (
    ISBN_livro integer,
    id_autor integer,
    CONSTRAINT escreve_pk PRIMARY KEY (ISBN_livro, id_autor),
    CONSTRAINT escreve_livro_fk FOREIGN KEY (ISBN_livro) REFERENCES Livro (ISBN)
        ON DELETE RESTRICT,
    CONSTRAINT escreve_autor_fk FOREIGN KEY (id_autor) REFERENCES Autor (id)
        ON DELETE RESTRICT
);

CREATE TABLE pertence (
    id_categoria integer,
    ISBN_livro integer,
    CONSTRAINT pertence_pk PRIMARY KEY (id_categoria, ISBN_livro),
    CONSTRAINT pertence_categoria_fk FOREIGN KEY (id_categoria) REFERENCES Categoria (id)
        ON DELETE RESTRICT,
    CONSTRAINT pertence_livro_fk FOREIGN KEY (ISBN_livro) REFERENCES Livro (ISBN)
        ON DELETE RESTRICT
);