
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DefaultData from './Default.js';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser'; 
 

const app = express(); 
const PORT = process.env.PORT || 8000; 

dotenv.config();

const URL =process.env.DB_URL;

Connection(URL); 

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();

app.use(bodyParser.json({ extended: true })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);


