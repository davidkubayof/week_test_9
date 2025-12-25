import { readFileByPath , saveDataInFile} from '../utils/utils.js'

export const createUser = async (req , res) => {
        const users = await readFileByPath('./data/users.json')
        
        const match = users.find(user => user.username === req.body.username)
        if(!req.body.type){
            req.body.type = "user"
        }
        if(!match){
            users.push(req.body)
            saveDataInFile('./data/users.json', users)
            res.send({"message": "User registered successfully"})
        } else {       
            res.status(401).json('user is alrdy exsist: ')
        } 
}
export const buyTickets = async (req , res) => {
        const events = await readFileByPath('./data/events.json')
        const receipts = await readFileByPath('./data/receipts.json')
        const EventInLowercase = req.body.eventName.toLowerCase()
        const match = events.find(event => event.eventName === EventInLowercase)
         
        if(match && match.ticketsAvailable >= req.body.quantity){
            
            const objReceipts = {"username": req.body.username , "eventName" : EventInLowercase , "ticketsBought": req.body.quantity}
            
            receipts.push(objReceipts)
            
            match.ticketsAvailable -= req.body.quantity
            
            saveDataInFile('./data/events.json', events)
            saveDataInFile('./data/receipts.json', receipts)
            res.send({ "message": "Tickets purchased successfully"})
        } else {       
            res.status(401).json('Tickets are sold out: or not exists ')
        } 
}
export const getSummary =  async (req , res) => {
    try {
        const receipts = await readFileByPath('./data/receipts.json')
        const allreceipts = receipts.filter(receipt => receipt.username === req.params.username )
    
        let totalTicketsBought = 0  
        let events = []
        let averageTicketsPerEvent = 0 
        
        for(const receipt of allreceipts){
            totalTicketsBought += receipt.ticketsBought
            if(!events.includes(receipt.eventName)){
                events.push(receipt.eventName)
            } 
        }
        averageTicketsPerEvent = totalTicketsBought / events.length 
        
        res.json({
        "totalTicketsBought": totalTicketsBought,
        "events": events,
        "averageTicketsPerEvent": averageTicketsPerEvent
        })
    } catch (error) {
        res.status(404).json(error)
        
    }
}
