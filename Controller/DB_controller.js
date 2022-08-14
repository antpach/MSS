const dataStore = require('nedb')

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
    ROOM_NUMBER_TAKEN: 'room number taken',
    INVALID_ARGUMENT: 'invalid argument',
    NOT_ITEM_TO_UPDATE: 'no item to update',
    ERROR: 'error'
};


 const { userModel } = require('../Model/User');
 const { roomModel } = require('../Model/Room');
 const { meetingModel } = require('../Model/Meeting');
 const { complaintModel } = require('../Model/Complaint');


 class DB_Controller_Class {

    /////////////////////////// USER /////////////////////////////
    addClient(user){
        return new Promise((resolve, reject) => {
            if ((user instanceof userModel) == false)
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


    getUser(user_name, password) {
        return new Promise((resolve, reject) => {
            USER_PROFILE_COLLECTION.findOne(
                { user_name: user_name },
                (err, doc) => {
                    // response defined here...
                    let response = null;
                    if (err)
                        response = err;
                    else if (doc == [] || doc == null)
                        response = Response.USERNAME_NOT_FOUND;
                    else {
                        if (doc.passwordHash != password)
                            response = Response.INCORRECT_PASSWORD;
                        else
                            response = doc;
                    }

                    if (response == doc)
                        resolve(response);
                    else
                        reject(response);
                }
            );
        });
    }

    // changes password for user 
    editPassword(id, new_password) {
        return new Promise((resolve, reject) => {
            USER_PROFILE_COLLECTION.update(
                { _id: id },
                { $set: { passwordHash: new_password } },
                { returnUpdatedDocs: true },
                (err, numAffected, affectedDocuments, upsert) => {
                    // response defined here...
                    let response = null;
                    if (err)
                        response = err;
                    else if (numAffected == 0)
                        response = Response.NOT_ITEM_TO_UPDATE;
                    else
                        response = affectedDocuments;

                    if (response == affectedDocuments)
                        resolve(response);
                    else
                        reject(response);
                }
            );
        });
    }

    editBilling(id, newName, newAddress) {
        return new Promise((resolve, reject) => {
            USER_PROFILE_COLLECTION.update(
                { _id: id },
                { $set: { name: newName,  address: newAddress} },
                { returnUpdatedDocs: true },
                (err, numAffected, affectedDocuments, upsert) => {
                    // response defined here...
                    let response = null;
                    if (err)
                        response = err;
                    else if (numAffected == 0)
                        response = Response.NOT_ITEM_TO_UPDATE;
                    else
                        response = affectedDocuments;

                    if (response == affectedDocuments)
                        resolve(response);
                    else
                        reject(response);
                }
            );
        });
    }


    /////////////// MEETING ///////////////////////////////////

    addMeeting(meeting) {
        return new Promise((resolve, reject) => {
            if (meeting instanceof meetingModel == false)
                reject(Response.INVALID_ARGUMENT);
            else {
                return MEETING_COLLECTION.insert(
                    meeting,
                    (err) => {
                        if (err)
                            reject(err);
                        else
                            resolve(Response.SUCCESS);
                    }
                );
            }
        })
    }

    deleteMeeting(id) {
        return new Promise((resolve, reject) => {
            MEETING_COLLECTION.remove(
                { _id: id },
                {},
                (err, numRemoved) => {
                    // response defined here...
                    let response = null;
                    if (err)
                        response = err;
                    else if (numRemoved == 0)
                        response = Response.ERROR;
                    else
                        response = numRemoved;

                    if (response == numRemoved)
                        resolve(response);
                    else
                        reject(response);
                }
            );
        });
    }

    
   //////////// ROOM //////////////////////// 
   addRoom(room) {
    return new Promise((resolve, reject) => {
        if (room instanceof roomModel == false)
            reject(Response.INVALID_ARGUMENT);
        else {
            return ROOM_COLLECTION.insert(
                room,
                (err) => {
                    if (err)
                        reject(err);
                    else
                        resolve(Response.SUCCESS);
                }
            );
        }
      })
    }

    deleteRoom(id) {
        return new Promise((resolve, reject) => {
            ROOM_COLLECTION.remove(
                { _id: id },
                {},
                (err, numRemoved) => {
                    // response defined here...
                    let response = null;
                    if (err)
                        response = err;
                    else if (numRemoved == 0)
                        response = Response.ERROR;
                    else
                        response = numRemoved;

                    if (response == numRemoved)
                        resolve(response);
                    else
                        reject(response);
                }
            );
        });
    }

    //////////// COMPLAINTS //////////////////////// 
    addComplaint(complaint) {
        return new Promise((resolve, reject) => {
            if (complaint instanceof roomModel == false)
                reject(Response.INVALID_ARGUMENT);
            else {
                return COMPLAINT_COLLECTION.insert(
                    complaint,
                    (err) => {
                        if (err)
                            reject(err);
                        else
                            resolve(Response.SUCCESS);
                    }
                );
            }
          })
        }

    deleteComplaint(id) {
        return new Promise((resolve, reject) => {
            COMPLAINT_COLLECTION.remove(
                { _id: id },
                {},
                (err, numRemoved) => {
                    // response defined here...
                    let response = null;
                    if (err)
                        response = err;
                    else if (numRemoved == 0)
                        response = Response.ERROR;
                    else
                        response = numRemoved;

                    if (response == numRemoved)
                        resolve(response);
                    else
                        reject(response);
                }
            );
        });
    }

    editComplaint(id, response) {
        return new Promise((resolve, reject) => {
            USER_PROFILE_COLLECTION.update(
                { _id: id },
                { $set: { response: response }},
                { returnUpdatedDocs: true },
                (err, numAffected, affectedDocuments, upsert) => {
                    // response defined here...
                    let response = null;
                    if (err)
                        response = err;
                    else if (numAffected == 0)
                        response = Response.NOT_ITEM_TO_UPDATE;
                    else
                        response = affectedDocuments;

                    if (response == affectedDocuments)
                        resolve(response);
                    else
                        reject(response);
                }
            );
        });
    }
    

 }
 module.exports = {
     DB_Controller_Class,
     Response

 }