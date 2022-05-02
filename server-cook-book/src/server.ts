import express from "express";
// import dotenv from "dotenv";
import { connectToDatabase } from "./db/db";
import recipesRouter from './routes/recipes'
import categoriesRouter from './routes/categoies'
import commentRouter from './routes/comments'

// const env = process.env.ENV || 'local';
// dotenv.config({ path: `config/${env}.env` });
// if (env === 'local') {
//     dotenv.config({ path: `../config/global.${env}.env` });
// } else {
//     dotenv.config({ path: `config/global.${env}.env` });
// }

const app = express();
const port = 4000;
connectToDatabase();

app.use(express.json());

app.use('/recipes', recipesRouter)
/** Move these routes to recipes? */
app.use('/', commentRouter)

app.use('/categories', categoriesRouter)

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});