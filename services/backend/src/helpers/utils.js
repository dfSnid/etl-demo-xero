const mocker = require('mocker-data-generator').default;
const { Client } = require('pg');

module.exports.getJson = (schemaObject, number) => {
    const data = mocker()
    .schema('blob', schemaObject, number)
    .buildSync();
    return data.blob;
};

module.exports.getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports.createTable = () => {
    const client = new Client({
        user: process.env.POSTGRESQL_USER,
        host: process.env.POSTGRESQL_HOST,
        database: 'postgres',
        password: process.env.POSTGRESQL_PASSWORD,
        port: process.env.POSTGRESQL_PORT 
    });

    client.connect();

    const query = `CREATE TABLE IF NOT EXISTS accounts(data JSONB);`

    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Table is successfully created');
        client.end();
    });
}


