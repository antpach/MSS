//import { DB_Controller_Class} from './DB_Controller.js';
// import { Client } from'../Model/User.js';
const DB_Controller = require('./DB_Controller')
const {Client, User} = require('../Model/User')

class AccountController{
     create(client) {
        DB_Controller_Class
            .addClient(new Client(client.name, client.address,client.username, client.password))
            .then((response) => {
                console.log(`user account created\n${client.username} signed in`);
                return true; 
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
                return false; 
            });
        }
}
   

    module.exports = {
        AccountController
   
    }

