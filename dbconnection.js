const { Pool } = require('pg');
const dbconnection = new Pool({ 
    host: 'ec2-44-194-4-127.compute-1.amazonaws.com',
    user: 'ppdppbqbrxyrwa',
    password: '62692b1167583ed2094415428c19f37923b2b0a931a9ca6b8b3359d160dccb7b',
    database: 'd7cj3s1d728h8s',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = dbconnection;