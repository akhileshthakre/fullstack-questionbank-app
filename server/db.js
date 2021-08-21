const Pool = require('pg').Pool

const pool = new Pool({
    user: 'akhilesh',
    password: 'akhilesh',
    host: 'localhost',
    port: 5432,
    data: ['multipleoptions','questionbank']
})

module.exports = pool