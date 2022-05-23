
import express from 'express';
import { getAllCategories, getRecipesCategories } from '../controllers/category.controller';

const router = express.Router()

router.get('/:category/recipes', getRecipesCategories)
router.get('/', getAllCategories)


export default router