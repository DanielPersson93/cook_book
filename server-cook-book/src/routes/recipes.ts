import express from 'express';
import { addRecipes, getRecipeById, getRecipes } from '../controllers/recipes.contoller'

const router = express.Router()

router.get('/', getRecipes)
router.get('/:id', getRecipeById)
router.post('/', addRecipes)

export default router