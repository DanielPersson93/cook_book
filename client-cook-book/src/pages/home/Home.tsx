import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IRecipes } from '../../interface/recipe';
import { RecipeService } from '../../services/recipe.service';
import SectionLeft from './components/SectionLeft';
import SectionRight from './components/SectionRight';
import { useDispatch } from "react-redux";
import { RecipeActionType } from '../../store/recipe/recipeReducer';

const HomeStyle = styled.section`
display:flex;
justify-content:center;
`

const Home = () => {
    const [recipeService] = useState(new RecipeService());
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        recipeService.getAll("", params.categoryUrl).then((recipes: IRecipes[]) => {
            dispatch({
                type: RecipeActionType.SetRecipes,
                payload: recipes
            })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipeService, params.categoryUrl]);

    return (
        <HomeStyle>
            <SectionLeft></SectionLeft>
            <SectionRight></SectionRight>
        </HomeStyle>
    )
}

export default Home