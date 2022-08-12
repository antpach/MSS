class Admin{
    constructor(username, meetings, rooms){
        this.username = username;
        this.meetings =meetings;
        this.rooms = rooms; 
        this.type = 'a'; 
    }
}

class Client{
    constructor(username, meetings,billing){
        this.username = username;
        this.meetings = meetings;
        this.billing = billing;
        this.type = 'c';
    }
}