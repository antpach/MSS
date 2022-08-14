class Admin{
    constructor(username, meetings, rooms){
        this.username = username;
        this.meetings =meetings;
        this.rooms = rooms; 
        this.type = 'a'; 
    }
}

class Client{
    constructor(username, meetings,name, address, password){
        this.username = username;
        this.meetings = meetings;
        this.name = name;
        this.address= address;
        this.password= password; 
        this.type = 'c';
    }
}