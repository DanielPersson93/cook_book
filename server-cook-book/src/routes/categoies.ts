
import express from 'express';
import { getAllCategories, getRecipesCategories } from '../controllers/categoriescontroller';

const router = express.Router()

router.get('/:category/recipes', getRecipesCategories)
router.get('/', getAllCategories)


export default router