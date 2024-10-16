import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
const port = process.env.Port || 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Api is working")
});

app.listen(port,()=>console.log("Server is running on port: " + port)
)