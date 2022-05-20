import { useEffect, useState } from 'react';
import { useParams, } from 'react-router';
import styled from 'styled-components';
import { RecipeService } from '../../services/recipe.service';
import BackToHome from './components/BacktoHome';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Opinion from './components/titleRatingDescription/opinion/Opinion';
import HeadingRatingDescription from './components/titleRatingDescription/HeadingRatingDescription'
import Reviews from './components/Reviews';
import { useDispatch } from "react-redux";
import { ReviewActionType } from '../../store/review/reviewReducer';

const SinglePageBlockStyled = styled.div`
max-width:1120px;
display:flex;
flex-flow:wrap;
`
const BlockImage = styled.img`
margin-top:1rem;
margin-left:1rem;
width:400px;
height:400px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
`

const SinglePage = () => {
    const [id] = useState(useParams().id!);
    const [recipe, setRecipe] = useState<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        const recipeService = new RecipeService();
        recipeService.getOne(id).then((recipe: any) => {
            setRecipe(recipe);
            dispatch({ payload: recipe.ratings, type: ReviewActionType.SetReviews });
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <SinglePageBlockStyled>
            <HeadingRatingDescription recipe={recipe} />
            <BlockImage src={recipe?.imageUrl}></BlockImage>
            <Ingredients recipe={recipe} />
            <Instructions recipe={recipe} />
            <Opinion recipe={recipe} setRecipe={setRecipe} />
            <BackToHome />
            <Reviews recipe={recipe} />
        </SinglePageBlockStyled>
    )
}

export default SinglePage
