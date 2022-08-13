

const ControllerClass = require('./DB_controller');
const Room = require("../Model/Room");

module.exports = (num,cap,cost=0) => {
    createRoom(num,cap,cost);
}

     function createRoom(num,cap,cost=0) {
         let DB_Controller_Class = new ControllerClass.DB_Controller_Class;
         const  Room  = require('../Model/Room');

         let room = null;
         if(cost != 0)
         {
             room = new Room.SpecialRoom(num,cap);
         }
         else
         {
             room = new Room.NormalRoom(num,cap);
         }
        if (!room.cost) {
            DB_Controller_Class
                .addRoom(new Room.NormalRoom(room.number, room.capcity, 0))
                .then((response) => {
                    console.log('Admin has created room :\n${room.number}\nwith capacity : ${room.capacity}')
                    return true;
                }).catch((error) => {
                let message = null;
                switch (error) {
                    case ControllerClass.Response.ROOM_NUMBER_TAKEN:
                        message = 'Room number all ready in use'
                        console.log(message);
                        break;
                    case ControllerClass.Response.INVALID_ARGUMENT:
                        throw new Error("Invalid Room Model Provided For Normal Room")
                    default:
                        message = 'Unknown error with creating a new room. Please try again'
                        console.log(message)
                        console.log(error)
                }
                console.log('Sending error message...')
                return false

            });
        }
        if (room.cost) {
            DB_Controller_Class
                .addRoom(new Room.SpecialRoom(room.number, room.capcity, 100))
                .then((response) => {
                    console.log('Admin has created room :\n${room.number}\nwith capacity : ${room.capacity}\n and with cost : ${room.cost}')
                    return true;
                }).catch((error) => {
                let message = null;
                switch (error) {
                    case ControllerClass.Response.ROOM_NUMBER_TAKEN:
                        message = 'Room number all ready in use'
                        console.log(message);
                        break;
                    case ControllerClass.Response.INVALID_ARGUMENT:
                        throw new Error("Invalid Room Model Provided For Normal Room")
                    default:
                        message = 'Unknown error with creating a new room. Please try again'
                        console.log(message)
                        console.log(error)

                }
                console.log('Sending error message...')
                return false

            });
        }
        else
        {
            console.log(room);
        }


    }


