import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send("Hola desde express")
})

app.listen(port, () => {
    console.log("App listening port:", port)
})