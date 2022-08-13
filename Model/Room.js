class NormalRoom{
    constructor(number, capcity){
        this.number = number;
        this.capcity = capcity;
    }
}

class SpecialRoom{
    constructor(number, capcity){
        this.number = number;
        this.capcity = capcity;
        let cost = 100; 
    }
}

module.exports = {
    NormalRoom : NormalRoom,
    SpecialRoom : SpecialRoom
}