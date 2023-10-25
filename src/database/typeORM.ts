import { DataSource } from "typeorm";
import { ModelArray } from "./model.array";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: ModelArray,
    subscribers: [],
    migrations: [],
});
AppDataSource.initialize()
    .then(res => {
        console.log("database connected", res.isInitialized)
    })
    .catch(error => console.log(error))

