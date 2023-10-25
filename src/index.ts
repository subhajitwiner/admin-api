import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import { IndexRouter } from './router';
import cors from 'cors';
import http from 'http';

const app = express();
const indexRouter = new IndexRouter();
app.use(cors());
app.use(bodyParser.json());
app.use(compression());


const port = process.env.PORT|| 3000;
const server = http.createServer(app);

server.listen(port, startServer);
function startServer(){
  console.log(`Server running on http://localhost:${port}/`);
}
app.use('/', indexRouter.route());


/* import { Photo } from './models/photos.model';
import {AppDataSource} from './database/data-source';
const photo = new Photo()
photo.name = "Me and Bears"
photo.description = "I am near polar bears"
photo.filename = "photo-with-bears.jpg"
photo.views = 1
photo.isPublished = true
photo.tes = "dada"
 AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Connection established');        
        AppDataSource.manager.save(photo).then(()=>{
            console.log("Photo has been saved. Photo id is", photo.id)
        }).catch((err)=> console.log(err));
    })
    .catch((error) => console.log(error));
console.log("Hello world!"); */
