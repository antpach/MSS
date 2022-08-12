import { create } from './Controller/AccountController.js'; 
const { Client } = require('./Model/Use.js');

const login = document.getElementById("login"); 
const newAccount = document.getElementById("newAccount");

// listener for createing a new client account
 document.getElementById("create").onclick =() =>{
     login.style.display='none';
     newAccount.style.display = 'block';
}

document.getElementById("Create").onclick = () => {
    Client = new Client(
        document.getElementById('name').value,  document.getElementById('address').value, 
        document.getElementById('newU').value,  document.getElementById('pass').value
    );

    

    create(userModel); 
}

