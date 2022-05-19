import express from "express";
import { connectToDatabase } from "./db/db";
import recipesRouter from './routes/recipes'
import categoriesRouter from './routes/categoies'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 4000;
connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/recipes', recipesRouter)
app.use('/categories', categoriesRouter)


app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});