import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { User } from "./models/user.js";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGO_URI, // Usa la variable de entorno para la conexión
  useNewUrlParser: true,
  useUnifiedTopology: true,
  database: process.env.DB_NAME || "mydatabase",
  port: 27017,
  entities: [
    User
  ], // Carga todas las entidades
  synchronize: true, // ⚠️ Solo para desarrollo, crea tablas automáticamente
  logging: false,
});
