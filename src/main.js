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

async function inserir(table, nome){
    await table.create({nome: nome});
}
//inserir(Autor, 'Sorvetinho');
//inserir(Categoria, 'Moranguinho');

async function inserir_usuario(){
    await Usuario.create({email: 'fulano@gmail.com', nome: 'Fulano', user_name: 'fulano.pudim', nascimento: 2021-04-14});
}
//inserir_usuario();

async function inserir_livro(){
    await Livro.create({titulo: 'Como eu era antes de você'});
}
//inserir_livro();

async function inserir_avaliacao(){
    await Avaliacao.create({nota: 100, id_livro: 50, id_usuario: 50});
}
//inserir_avaliacao();
async function inserir_escreve(){
    await escreve.create({id_autor: 10, id_livro: 10});
}
//inserir_escreve();

async function inserir_pertence(){
    await escreve.create({id_livro: 10, id_categoria: 108});
}
//inserir_escreve();

async function consultar(table){
    let tabelas = await table.findAll();
    console.log(tabelas);
}
/*consultar(Autor);
consultar(Avaliacao);
consultar(Categoria);
consultar(escreve);
consultar(Livro);
consultar(pertence);
consultar(Usuario);*/

async function atualizar(table, nome){
    let tupla = await table.findOne({
        where: {id: 60}
    });
    tupla.update({nome: nome});
}
//atualizar(Usuario, 'Cicrano');
//atualizar(Autor, 'Jojo Moyes');
//atualizar(Categoria, 'Pão na Chapa');
async function atualizar_livro(){
    let livro = await Livro.findOne({
        where: {id: 60}
    });
    livro.update({titulo: 'Todo Dia'});
}
//atualizar_livro();
async function atualizar_avaliacao(){
    let avaliacao = await Avaliacao.findOne({
        where: {id: 60}
    });
    avaliacao.update({nota: 100});
}
//atualizar_avaliacao();

async function deletar(table){
   let tupla = await table.findOne({
       where: {id: 60}
   });
   tupla.destroy();
}
//deletar(Autor);
//deletar(Avaliacao);
//deletar(Categoria);
//deletar(escreve);
//deletar(Livro);
//deletar(pertence);
//deletar(Usuario);