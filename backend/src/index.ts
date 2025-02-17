import express, { Express, Request, Response } from "express";
import { AppDataSource } from "./ormconfig.js";

import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";


import Users from './routes/user.routes.js';

dotenv.config();

const app: Express = express();

const corsOptions = {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "user-agent", "api-key", "x-hub-signature-256"],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json()); // 

app.use(express.json());


(async () => {

    AppDataSource.initialize()
    .then(() => {
        console.log("📦 Conectado a MongoDB");

        app.listen(process.env.PORT || 3001, () => {
            console.log(`🚀 Servidor corriendo en el puerto ${process.env.PORT} actualizado`);
        });
    })
    .catch((err) => console.error("❌ Error conectando a MongoDB:", err));

})();

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
       message: "🚀 Servidor corriendo xDDDDD",
       status: 200,
    });
});


app.use('/users', Users);

