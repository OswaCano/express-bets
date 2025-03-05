import express from "express";
import { PORT } from "./node/config.js";

const app = express();

app.listen(PORT, () => {
    console.log(`App is listening ti port: ${PORT}`);
});
