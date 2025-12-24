import express from 'express'


const app = express();
const port = 3002;

app.use(express.json())

app.get('/test',(req , res)=>{
    res.json("good")
})

app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server run on ${port}`);
})

// console.log(new Date().toISOString());
