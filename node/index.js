import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import betsRoute from "./routes/betsRoute.js";
import cors from "cors";

const app = express();

//middleware request body
app.use(express.json());

//middleware cors
app.use(cors()); // permite a cualquier origen acceder a la api
//cors con configuracion
/*
app.use(cors({
    origin: 'http://localhost:8000',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));
*/

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send();
});

app.use('/bets', betsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to mongo');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });