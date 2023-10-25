import express from "express";
import * as bcrypt from "bcrypt";
import * as dotenv from 'dotenv';
import { UserService } from "../services/user.service";
export class UserController{
    userService = new UserService();
  register = async (req: express.Request, res: express.Response) => {
    let info = await this.userService.createUser();
    res.status(200).json({data: info});

  };
  login = async (req: express.Request, res: express.Response) => {
    res.status(200).json({data: "test"});
  };
}
