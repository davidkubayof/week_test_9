import { readFileByPath } from '../utils/utils.js'

export const valid = async (req , res , next) => {
        const users = await readFileByPath('./data/users.json')
    
        const mach = users.find(user => 
            user.username === req.body.username && 
            user.password === req.body.password)
    
        if(mach){
            next()
        } else {       
            res.status(401).json('user not exists ')
        } 
    
}