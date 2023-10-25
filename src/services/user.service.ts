import {Photo} from "../models/photos.model";
import { AppDataSource } from "../database/typeORM";
export class UserService {
    photoRepository = AppDataSource.getRepository(Photo)
    constructor() {}
    async createUser() {
        try {
            const savedPhotos = await this.photoRepository.find()
            return {data: savedPhotos};
        } catch (error) {
            return {data: error};
        }
    }
  }