const login = document.getElementById("login");
const newAccount = document.getElementById("newAccount");

 document.getElementById("create").onclick =() =>{
     login.style.display='none';
     newAccount.style.display = 'block';
}

function newRoom()
{

    let Num = document.getElementById("Rnum").value
    console.log(Num)
    let Capacity = document.getElementById("Rcap").value
    console.log(Capacity)
    let Cost = document.getElementById("Rcost").value
    console.log(Cost)
    let room = null;
    if(Cost != 0)
    {
        room = new NormalRoom(Num,Capacity);
    }
    else
    {
        room = new SpecialRoom(Num,Capacity);
    }
    createRoom(room)
}
