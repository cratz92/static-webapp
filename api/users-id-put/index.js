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
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var email = req.body.email;
        var passwrd = req.body.passwrd;
        var company = req.body.company;
        var client = req.body.client;
        var userId = context.bindingData.id;
        
        if (!firstName || !lastName || !email || !passwrd || !company || !client) {
            context.res = {
                status: 400, 
                body: "Please pass firstName, lastName, email, passwrd, company and client."
            };
        }

        // simple query
        const result = connection.query('UPDATE `users` SET (firstName=?, lastName=?, email=?, passwrd=?, company=?, client=?) WHERE id=?', [firstName, lastName, email, passwrd, company, client, userId]);
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