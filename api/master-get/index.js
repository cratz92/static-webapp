const mysql = require('sync-mysql');

module.exports = async function (context, req) {
    const connection = new mysql({
        host: 'reportingcloud.mysql.database.azure.com',
        database: 'reportingclouddb',
        port: '3306',
        user: 'adminUser',
        password: 'contafake#92',
    });

    // simple query
    const result = await connection.query('SELECT * FROM `masters`');
    console.log(result);
    //responseMessage = `${responseMessage} ${JSON.stringify(resp)}`;
    //console.log(responseMessage);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
};