import express, { Router } from 'express'
import routerUser from './routes/userR.js'
import routerEvent from './routes/eventR.js'

const app = express();
const port = 3002;

app.use(express.json())

//user 
app.use('/users', routerUser )

//events
app.use('/event', routerEvent)

app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server run on ${port}`);
})
