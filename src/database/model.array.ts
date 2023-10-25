import { EntitySchema, MixedList } from "typeorm";
import { Photo } from "../models/photos.model";
import { User } from "../models/users.model";

export const ModelArray:MixedList<string | Function | EntitySchema<any>> = [Photo, User];