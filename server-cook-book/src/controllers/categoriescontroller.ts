import { Request, Response } from 'express'
import RecipesModel from '../models/recipes.models'


export const getAllCategories = async (req: Request, res: Response) => {
    const cat = req.params.category
    try {
        const categories = await RecipesModel.aggregate([{

            $group: { _id: "$category", count: { $count: {} } }
        }])
        return res.status(200).json(categories)
    } catch (err) {
        return res.status(400).json(err)
    }
}

export const getRecipesCategories = async (req: Request, res: Response) => {
    const categoryName = req.params.category
    /** Set default to empty string so regex dont complain */
    const searchQuery = req.query.search || "";
    try {
        const categories = await RecipesModel.find({ category: categoryName, title: { $regex: searchQuery, $options: "i" } })
        return res.status(200).json(categories)
    } catch (err) {
        return res.status(400).json(err)
    }
}