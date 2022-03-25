import express from 'express'
import DBConnection from './Db/index.js';
import Router from './Router/index.js';
import cors from 'cors'
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
const PORT = 3001;

app.use('/',Router);

app.listen(PORT, console.log(`server runing on Port ${PORT}`));

DBConnection();