class Admin{
    constructor(username, meetings, rooms){
        this.username = username;
        this.meetings =meetings;
        this.rooms = rooms; 
        this.type = 'a'; 
    }
}

class Client{
    constructor(name, address, username, password){
        this.name = name;
        this.address = address;
        this.username = username;
        this.password = password;
        this.type = 'c';
    }
}