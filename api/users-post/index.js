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
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let passwrd = req.body.passwrd;
        let company = req.body.company;
        let client = req.body.client;

        if (!firstName || !lastName || !email || !passwrd || !company || !client) {
            context.res = {
                status: 400, 
                body: "Please pass firstName, lastName, email, passwrd, company and client."
            };
        }
                
        // simple query
        const result = connection.query('INSERT INTO `users` (firstName, lastName, email, passwrd, company, client) VALUES (?,?,?,?,?,?)', [firstName, lastName, email, passwrd, company, client]);
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