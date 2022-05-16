import { model, Schema } from 'mongoose'
import ICategory from './interfaces/category.model';
import IRatings from './interfaces/ratings.models';
import IIngredients from './interfaces/ingrediensts.model'
import IInstructions from './interfaces/instructions.model';
import CommentModel from './comment.model';

interface IRecipes {
    title: string;
    description: string;
    imageUrl: string;
    timeInMin: string;
    ratings?: number[];
    category: ICategory[];
    ingredients: IIngredients;
    instructions: IInstructions;
    comments: any[];
}

const schema = new Schema<IRecipes>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String/*, required: true*/ },
    timeInMin: { type: String, required: true },
    ratings: [{ type: Number, default: [] }],
    category: { type: [], required: true },
    ingredients: { type: [], required: true },
    instructions: { type: [], required: true },
    comments: [{ type: CommentModel.schema, default: [] }],
})


const RecipesModel = model<IRecipes>('Recipes', schema)
export default RecipesModel