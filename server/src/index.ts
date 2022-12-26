import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';

import Team from './models/Team';

import {config} from "dotenv";
config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({
    origin: "*",
}));

//API GET request for the Team model in the DB
app.get("/teams", async (req: Request, res: Response) => {
    const teams = await Team.find();
    res.json(teams);
});

//API POST request for users to add teams to the DB
app.post("/teams", async (req: Request, res: Response) => {
    const newTeam = new Team({
        name: req.body.name,
    });
    const createdTeam = await newTeam.save();
    res.json(createdTeam);
});

//Connecting the DB to the Server
mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});