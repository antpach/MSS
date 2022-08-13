const login = document.getElementById("login");
const newAccount = document.getElementById("newAccount");
const adminHome = document.getElementById("adminHome");

 document.getElementById("create").onclick =() =>{
     login.style.display='none';
     newAccount.style.display = 'block';
}

const room = require("../Model/Room");

document.getElementById("createRoom").onclick =() =>{

    let Num = document.getElementById("Rnum").value
    console.log(Num)
    let Capacity = document.getElementById("Rcap").value
    console.log(Capacity)
    let Cost = document.getElementById("Rcost").value
    console.log(Cost)
    room = null;
    if(Cost != 0)
    {
        room = new SpecialRoom(Num,Capacity);
    }
    else
    {
        room = new NormalRoom(Num,Capacity);
    }
    createRoom(room)
}

document.getElementById("log").onclick =() =>{
    login.style.display='none';
    adminHome.style.display = 'block';
}
