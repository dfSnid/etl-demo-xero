const { Pool } = require('node-postgres');
const accountSchema = require('./schemas/accounts');
const transactionSchema = require('./schemas/transactions');
const utils = require('./helpers/utils');



async function insertRows(){
  const pool = new Pool({
    user: process.env.POSTGRESQL_USER,
    host: process.env.POSTGRESQL_HOST,
    database: 'postgres',
    password: process.env.POSTGRESQL_PASSWORD,
    port: process.env.POSTGRESQL_PORT 
  });
  
  const client = await pool.connect();
  const newAccount = JSON.stringify(utils.getJson(accountSchema,1));

  const insertText = `
  INSERT INTO accounts(data) VALUES('${newAccount}');
  `;

  // create a new account
  await client.query(insertText);
  
  const result = await client.query('SELECT * FROM accounts');
  console.log(result.rows);
  
  //await client.end();
  client.release();
}

 const run = async () => {
  utils.createTable();
  setInterval(insertRows, 5000);
};

run().catch(e => console.error(`[producer] ${e.message}`, e));

