import { Request, Response } from 'express'
import RecipesModel from '../models/recipes.models'

export const getRecipes = async (req: Request, res: Response) => {
    const searchQuery = req.query.search;
    const category = req.query.category;
    const searchForTitleOrCategoryName = searchQuery ?
        {
            $or: [
                {
                    title: {
                        $regex: searchQuery,
                        $options: "i"
                    }
                },
                {
                    "category.name": {
                        $regex: searchQuery,
                        $options: "i"
                    }
                }
            ]
        }
        : {};

    const categoryQuery = category ? { "category.url": category } : {};

    try {
        const recipes = await RecipesModel.aggregate([
            {
                $match: {
                    $and: [
                        { ...searchForTitleOrCategoryName },
                        { ...categoryQuery }
                    ]

                }
            }
        ]);

        return res.status(200).json(recipes)
    } catch (err) {
        return res.status(400).json(err)
    }
}

export const getRecipeById = async (req: Request, res: Response) => {
    const recipeId = req.params.recipeId
    try {

        const recipes = await RecipesModel.findById(recipeId);

        return res.status(200).json(recipes)
    } catch (err) {
        return res.status(400).json(err)
    }
}

export const addRecipes = async (req: Request, res: Response) => {
    const recipe = new RecipesModel({
        ...req.body
    });

    try {
        await recipe.save();
        res.status(200).json(await getOne(recipe.id))
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