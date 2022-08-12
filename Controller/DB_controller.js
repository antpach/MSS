import dataStore from  'nedb';

const USER_PROFILE_COLLECTION = new dataStore({ filename: './DB/user_profile_collection', autoload: true });
USER_PROFILE_COLLECTION.persistence.setAutocompactionInterval(60000 /*ms*/)

const ROOM_COLLECTION = new dataStore({ filename: './DB/room_collection', autoload: true });
ROOM_COLLECTION.persistence.setAutocompactionInterval(60000 /*ms*/)

const MEETING_COLLECTION = new dataStore({ filename: './DB/meeting_collection', autoload: true });
MEETING_COLLECTION.persistence.setAutocompactionInterval(60000 /*ms*/)

const COMPLAINT_COLLECTION = new dataStore({ filename: './DB/complaint_collection', autoload: true });
COMPLAINT_COLLECTION.persistence.setAutocompactionInterval(60000 /*ms*/)

const Response = {
    INCORRECT_PASSWORD: 'incorrect password',
    USERNAME_NOT_FOUND: 'username not found',
    USERNAME_TAKEN: 'username taken',
    INVALID_ARGUMENT: 'invalid argument',
    NOT_ITEM_TO_UPDATE: 'no item to update',
    ERROR: 'error'
};


import { Client, Admin } from'../Model/User.js';
import { NormalRoom,  SpecialRoom} from '../Model/Room.js';
import { Meeting } from '../Model/Meeting.js';
import { Complaint } from '../Model/Complaint.js';
import { Billing } from '../Model/Billing.js';


 export class DB_Controller_Class {

    /////////////////////////// USER /////////////////////////////
    addClient(user){
        return new Promise((resolve, reject) => {
            if ((user instanceof Client) == false)
                reject(Response.INVALID_ARGUMENT);
            else {
                USER_PROFILE_COLLECTION.count(
                    { user_name: user.username },
                    (err, numberOfUsersFound) => {
                        if (err)
                            reject(err);
                        else if (numberOfUsersFound > 0)
                            reject(Response.USERNAME_TAKEN);
                        else {
                            USER_PROFILE_COLLECTION.insert(
                                user,
                                (err, doc) => {
                                    if (err)
                                        reject(err);
                                    else
                                        resolve(doc);
                                }
                            );
                        }
                    }
                );
            }
        });
    }

 }