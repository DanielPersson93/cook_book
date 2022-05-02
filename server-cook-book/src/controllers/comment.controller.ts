import { Request, Response } from "express";
import RecipesModel from "../models/recipes.models";

export const getRecipeComments = async (req: Request, res: Response) => {
    try {
        const recipe = await RecipesModel.findById(req.params.recipeId);
        return res.status(200).json(recipe.comments)
    } catch (err) {
        return res.status(400).json(err)
    }
}

export const addRecipeComment = async (req: Request, res: Response) => {
    try {
        const recipe = await RecipesModel.findById(req.params.recipeId);
        recipe.comments.push({
            comment: req.body.comment,
            name: req.body.name,
            createdAt: new Date()
        });
        await recipe.save();
        res.status(200).json(recipe)
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}