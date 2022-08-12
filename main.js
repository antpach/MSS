
import { AccountController } from './Controller/AccountController'; 
const { userModel } = require('./Model/User');

const login = document.getElementById("login"); 
const newAccount = document.getElementById("newAccount");

// listener for createing a new client account
 document.getElementById("create").onclick =() =>{
     login.style.display='none';
     newAccount.style.display = 'block';
}

document.getElementById("Create").onclick = () => {
    userModel = new Client(
        document.getElementById('name').value,  document.getElementById('address').value, 
        document.getElementById('newU').value,  document.getElementById('pass').value
    );

    const ac = new AccountController(); 

    ac.create(userModel); 
}

