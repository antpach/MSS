const { DB_Controller, Response } = require('./Controller/DB_Controller');
const { userModel } = require('./Model/User');

class AccountController{
    create(client) {
        DB_Controller
        .addClient(new userModel(client.name, client.address,client.username, client.password))
        .then((response) => {
            console.log(`user account created\n${client.username} signed in`);

            console.log("success");
        

        }).catch((error) => {
            let message = null;
            switch (error) {
                case Response.USERNAME_TAKEN:
                    message = 'User name taken';
                    console.log(message);
                    break;
                case Response.INVALID_ARGUMENT:
                    throw new Error('Invalid User Model provided');
                default:
                    message = 'Unknown error when logging in. Please try again.'
                    console.log(message);
            }
            console.log('sending error message...');
        });
    }
}

module.exports.TestClass = TestClass;