import express from 'express';
import { getRecipeComments, addRecipeComment } from '../controllers/comment.controller';

const router = express.Router()

router.get('/recipes/:recipeId/comments', getRecipeComments)
router.post('/recipes/:recipeId/comments', addRecipeComment)

export default router
