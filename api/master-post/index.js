const mysql = require('sync-mysql');

module.exports = async function (context, req) {
    
    try {
        if (!req.body) {
            context.res = {
                status: 400, 
                body: "Please pass the request body."
            };
        }

        const connection = new mysql({
            host: 'reportingcloud.mysql.database.azure.com',
            database: 'reportingclouddb',
            port: '3306',
            user: 'adminUser',
            password: 'contafake#92',
        });
    
        //console.log(req.body.firstName);
        var userId = req.body.userId;
        var countId = req.body.countId;
        var janVal = req.body.janVal;
        var febVal = req.body.febVal;
        var marVal = req.body.marVal; 
        var aprVal = req.body.aprVal; 
        var mayVal = req.body.mayVal;
        var junVal = req.body.junVal;
        var julVal = req.body.julVal;
        var agoVal = req.body.agoVal;
        var sepVal = req.body.sepVal;
        var octVal = req.body.octVal;
        var novVal = req.body.novVal;
        var decVal = req.body.decVal;
        var year = req.body.year;
        var initBalance = req.body.initBalance;
        var finalBalance = req.body.finalBalance;
        

        if (!userId || !countId || !janVal || !febVal || !marVal || !aprVal || !mayVal || !junVal || !julVal || !agoVal || !sepVal || !octVal || !novVal || !decVal || !year || !initBalance || !finalBalance) {
            context.res = {
                status: 400, 
                body: "Please pass userId, countId, janVal, febVal, marVal, aprVal, mayVal, junVal, julVal, agoVal, sepVal, octVal, novVal, decVal, year, initBalance and finalBalance."
            };
        }
                
        // simple query
        const result = connection.query('INSERT INTO `masters` (userId, countId, janVal, febVal, marVal, aprVal, mayVal, junVal, julVal, agoVal, sepVal, octVal, novVal, decVal, year, initBalance, finalBalance) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [userId, countId, janVal, febVal, marVal, aprVal, mayVal, junVal, julVal, agoVal, sepVal, octVal, novVal, decVal, year, initBalance, finalBalance]);
        console.log(result);
        
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: result
        };
        
    } catch (error) {
        context.res = {
            status: 500, 
            body: error.message
        };
    }
  
   
};