import express from 'express'
import dotenv from 'dotenv'
import DataBase from './db/DataBase.js';
import morgan from 'morgan';
import router from './routes/Auth.js'
import cors from 'cors'
const app=express();

// in case server.js not a root file config({path:})

dotenv.config();

const PORT=process.env.PORT || 8080

// middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
DataBase();
app.use('/api/v1/auth',router)
// Routes
app.get('/',(req,res)=>{
    res.send('Server Running')
})

app.listen('8080',()=>{
    console.log(`Server Running on ${PORT}`)
})