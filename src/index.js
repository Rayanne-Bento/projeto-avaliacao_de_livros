const {Pool} = require('pg');
const sql = require('fs').readFileSync('./etc/script-create-table.sql', 'utf8');

async function criarConexao(){
    const poll = new Pool({
        connectionString: '',
        ssl: {
            rejectUnauthorized: false
        }
    });
    
    let con = await poll.connect(); 
    await con.query(sql);
    con.release();   
}

criarConexao();