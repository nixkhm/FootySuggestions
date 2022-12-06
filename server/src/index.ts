import express, {Request, Response} from "express"
import mongoose from 'mongoose';

import Team from './models/Team';

const app = express();
const PORT = 8000;

app.use(express.json());

app.post("/teams", async (req: Request, res: Response) => {
    const newTeam = new Team({
        name: req.body.name,
    });
    const createdTeam = await newTeam.save();
    res.json(createdTeam);
})

mongoose.connect('mongodb+srv://footysuggestions:EvertonNick2002@cluster0.npyhkmj.mongodb.net/?retryWrites=true&w=majority'
).then (() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
})


