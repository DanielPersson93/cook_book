import { Request, Response } from 'express'
import RecipesModel from '../models/recipes.models'

export const getRecipes = async (req: Request, res: Response) => {
    const searchQuery = req.query.search;
    try {
        const recipes = await RecipesModel.find(searchQuery ? { title: { $regex: searchQuery, $options: "i" } } : {});
        return res.status(200).json(recipes)
    } catch (err) {
        return res.status(400).json(err)
    }
}

export const getRecipeById = async (req: Request, res: Response) => {
    const recipeId = req.params.recipeId
    try {

        const recipes = await RecipesModel.findById(recipeId);
        console.log(recipes);
        console.log(recipeId);

        return res.status(200).json(recipes)
    } catch (err) {
        return res.status(400).json(err)
    }
}

export const addRecipes = async (req: Request, res: Response) => {
    const recepe = new RecipesModel({
        ...req.body
    });
    // recepe.title = req.body.title;
    // recepe.description = req.body.description;
    // recepe.imgageUrl = req.body.imgageUrl;
    // recepe.timeInMin = req.body.timeInMin;
    // recepe.category = req.body.category;
    // recepe.ingredients = req.body.ingredients;
    // recepe.instructions = req.body.instructions;

    try {
        await recepe.save();
        res.status(200).json(await getOne(recepe.id))
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }

}

const getOne = async (_id: string) => {
    return await RecipesModel.aggregate([
        {
            $match: { id: _id },

        }
    ]).then((recipes) => recipes ? recipes[0] : null)
}