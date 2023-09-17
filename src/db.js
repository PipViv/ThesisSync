const { Pool } = require('pg');

const {db} = require('./config');

const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database:db.database
});

/*
const pool = new Pool({
    user: 'postgres',
    password: 'Vivpa16*',
    host: 'localhost',
    port: 5432,
    database:"thesissync_test",
});*/

module.exports = pool;