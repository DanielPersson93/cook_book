import { model, Schema } from 'mongoose'
import ICategory from './interfaces/category.model';
import IRatings from './interfaces/ratings.models';
import IIngredients from './interfaces/ingrediensts.model'
import IComments from './interfaces/comments.model';
import IInstructions from './interfaces/instructions.model';
import CommentModel from './comment.model';

interface IRecipes {
    title: string;
    description: string;
    imgageUrl: string;
    timeInMin: string;
    ratings?: number[];
    category: string[];
    ingredients: IIngredients;
    instructions: IInstructions;
    comments: any[];
}

const schema = new Schema<IRecipes>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgageUrl: { type: String, required: true },
    timeInMin: { type: String, required: true },
    ratings: { type: [] },
    category: { type: [], required: true },
    ingredients: { type: [], required: true },
    instructions: { type: [], required: true },
    comments: [{ type: CommentModel.schema, default: [] }],
})

const RecipesModel = model<IRecipes>('Recipes', schema)
export default RecipesModel