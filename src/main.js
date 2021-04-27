require('dotenv').config();
let db = require('./db');
let Autor = require('./model/Autor');
const Avaliacao = require('./model/Avaliação');
let Categoria = require('./model/Categoria');
let escreve = require('./model/escreve');
let Livro = require('./model/Livro');
let pertence = require('./model/pertence');
let Usuario = require('./model/Usuario.js');

async function sincronizar(){
    await db.sync();
}
//sincronizar();

var DAO = {
    //CREATE
    inserir: {
        autor_categoria: async function(table, nome){
            await table.create({nome: nome});
        },
        usuario: async function(email, nome, user_name, nascimento){
            await Usuario.create({email: email, nome: nome, user_name: user_name, nascimento: nascimento});
        },
        livro: async function(titulo){
            await Livro.create({titulo: titulo});
        },
        avaliacao: async function(nota, id_livro, id_usuario){
            await Avaliacao.create({nota: nota, id_livro: id_livro, id_usuario: id_usuario});
        },
        escreve: async function(id_autor, id_livro){
            await escreve.create({id_autor: id_autor, id_livro: id_livro});
        },
        pertence: async function(id_livro, id_categoria){
            await escreve.create({id_livro: id_livro, id_categoria: id_categoria});
        }
    },
    //READ
    consultar: async function(table){
        let tabelas = await table.findAll();
        console.log(tabelas);
    },
    //UPDATE
    atualizar: {
        usuario_autor_categoria: async function(table, nome, id){
            let tupla = await table.findOne({
                where: {id: id}
            });
            tupla.update({nome: nome});
        },
        livro: async function(titulo, id){
            let livro = await Livro.findOne({
                where: {id: id}
            });
            livro.update({titulo: titulo});
        },
        avaliacao: async function(nota, id){
            let avaliacao = await Avaliacao.findOne({
                where: {id: id}
            });
            avaliacao.update({nota: nota});
        }
    },
    //DELETE
    deletar: async function(table, id){
        let tupla = await table.findOne({
            where: {id: id}
        });
        tupla.destroy();
    }
}

try{
    DAO.inserir.autor_categoria(table, nome);
    /*DAO.inserir.usuario(nome);
    DAO.inserir.livro(titulo, id);
    DAO.inserir.avaliacao(nota)
    DAO.inserir.escreve(id);
    DAO.inserir.pertence(id);*/
}catch(error){
    throw new Error('Objeto não criado!')
}

try{
    DAO.consultar(Auto);
}catch(error){
    throw new Error('Objeto não encontrado!')
}

try{
    DAO.atualizar.usuario_autor_categoria(table, nome, id);
    /*DAO.atualizar.livro(titulo, id);
    DAO.atualizar.avaliacao(nota, id);*/
}catch(error){
    throw new Error('Objeto não atualizado!')
}

try{
    DAO.deletar(Autor, id);
}catch(error){
    throw new Error('Objeto não deletado!')
}