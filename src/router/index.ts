import express from 'express';
import { UserRouter } from './user.router';

export class IndexRouter {
  router = express.Router(); 
  route(){
    UserRouter(this.router,'/users');
    return this.router;
  }
}