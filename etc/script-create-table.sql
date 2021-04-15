CREATE TABLE Usuario (
    id serial,
    email varchar not null,
    user_name varchar not null,
    nascimento date not null,
    nome varchar not null,
    createdAt timestamp not null,
    updatedAt timestamp not null,
    CONSTRAINT usuario_pk PRIMARY KEY (id)
);

CREATE TABLE Autor (
    id serial,
    mini_bio varchar,
    nascimento date,
    nome varchar not null,
    createdAt timestamp not null,
    updatedAt timestamp not null,
    CONSTRAINT autor_pk PRIMARY KEY (id)
);

CREATE TABLE Livro (
    id serial,
    ISBN varchar,
    titulo varchar not null,
    editora varchar,
    ano integer,
    paginas integer,
    tradutor varchar,
    sinopse varchar,
    createdAt timestamp not null,
    updatedAt timestamp not null,
    CONSTRAINT livro_pk PRIMARY KEY (id)
);

CREATE TABLE Categoria (
    id serial,
    nome varchar not null,
    createdAt timestamp not null,
    updatedAt timestamp not null,
    CONSTRAINT categoria_pk PRIMARY KEY (id)
);

CREATE TABLE Avaliacao (
    id serial,
    nota integer not null,
    comentario varchar,
    resenha varchar,
    status_leitura varchar,
    id_usuario integer,
    id_livro integer,
    createdAt timestamp not null,
    updatedAt timestamp not null,
    CONSTRAINT avaliacao_pk PRIMARY KEY (id),
    CONSTRAINT avaliacao_usuario_fk FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
        ON DELETE RESTRICT,
    CONSTRAINT avaliacao_livro_fk FOREIGN KEY (id_livro) REFERENCES Livro (id)
        ON DELETE RESTRICT
);

CREATE TABLE escreve (
    id_livro integer,
    id_autor integer,
    createdAt timestamp not null,
    updatedAt timestamp not null,
    CONSTRAINT escreve_pk PRIMARY KEY (id_livro, id_autor),
    CONSTRAINT escreve_livro_fk FOREIGN KEY (id_livro) REFERENCES Livro (id)
        ON DELETE RESTRICT,
    CONSTRAINT escreve_autor_fk FOREIGN KEY (id_autor) REFERENCES Autor (id)
        ON DELETE RESTRICT
);

CREATE TABLE pertence (
    id_categoria integer,
    id_livro integer,
    createdAt timestamp not null,
    updatedAt timestamp not null,
    CONSTRAINT pertence_pk PRIMARY KEY (id_categoria, id_livro),
    CONSTRAINT pertence_categoria_fk FOREIGN KEY (id_categoria) REFERENCES Categoria (id)
        ON DELETE RESTRICT,
    CONSTRAINT pertence_livro_fk FOREIGN KEY (id_livro) REFERENCES Livro (id)
        ON DELETE RESTRICT
);