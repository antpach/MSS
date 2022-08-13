const login = document.getElementById("login");
const newAccount = document.getElementById("newAccount");
const adminHome = document.getElementById("adminHome");
const clientHome = document.getElementById("clientHome");

 document.getElementById("create").onclick =() =>{
     login.style.display='none';
     newAccount.style.display = 'block';
}


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
    if (document.getElementById('type').checked) {
        login.style.display='none';
        adminHome.style.display = 'block';
        document.getElementById("defaultOpen").click();
    }
    else{
        login.style.display='none';
        clientHome.style.display = 'block';
        document.getElementById("defaultOpen2").click();
    }
    
}

document.getElementById("logout").onclick =() => {
    adminHome.style.display = 'none';
    login.style.display='block';
  
    document.getElementById("clear").click(); 
   
}

document.getElementById("logout2").onclick =() => {
    clientHome.style.display = 'none';
    login.style.display='block';
  
    document.getElementById("clear").click(); 
   
}

document.getElementById("back").onclick =() => {
    newAccount.style.display = 'none';
    login.style.display='block';
}

function openChoice(evt, choice) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(choice).style.display = "block";
    evt.currentTarget.className += " active";
  }
