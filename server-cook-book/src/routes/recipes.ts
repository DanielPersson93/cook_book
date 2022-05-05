import express from 'express';
import { addRecipes, getRecipeById, getRecipes } from '../controllers/recipes.contoller'
import { getRecipeComments, addRecipeComment } from '../controllers/comment.controller';

const router = express.Router()

router.get('/', getRecipes)
router.get('/:recipeId', getRecipeById)
router.post('/', addRecipes)
router.get('/:recipeId/comments', getRecipeComments)
router.post('/:recipeId/comments', addRecipeComment)

export default router