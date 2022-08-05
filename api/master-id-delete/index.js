const mysql = require('sync-mysql');

module.exports = async function (context, req) {
    const connection = new mysql({
        host: 'reportingcloud.mysql.database.azure.com',
        database: 'reportingclouddb',
        port: '3306',
        user: 'adminUser',
        password: 'contafake#92',
    });

    var masterId = context.bindingData.id;

    // simple query
    const result = connection.query('DELETE FROM `masters` WHERE id=?', [masterId]);
    console.log(result);
    //responseMessage = `${responseMessage} ${JSON.stringify(resp)}`;
    //console.log(responseMessage);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
};