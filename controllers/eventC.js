import { readFileByPath , saveDataInFile} from '../utils/utils.js'

export const createEvent = async (req , res) => {
        const events = await readFileByPath('./data/events.json')
        const objEvents = {"eventName": req.body.eventName.toLowerCase() , "ticketsAvailable" : req.body.ticketsForSale , "createdBy": req.body.username}

        if(objEvents.eventName !== undefined && objEvents.ticketsAvailable !== undefined && objEvents.createdBy !== undefined){
            events.push(objEvents)
            saveDataInFile('./data/events.json', events)
            res.send({"message": "Event created successfully"})
        } else {       
            res.status(401).json('Cannot create an event ')
        } 
}