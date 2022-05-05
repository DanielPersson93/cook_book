import SearchField from "./SearchField";
import RecipesSmall from './RecipesSmall'
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { IRecipe, RecipeService } from "../../../services/recipe.service";



const SectionRightStyle = styled.div`
width: 715px;
height: 779px;;
margin-right:3rem;
display:flex;
flex-direction:column;
justify-content:space-between;
`

const SectionRight = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [recipeService] = useState(new RecipeService());

    useEffect(() => {
        recipeService.getAll().then((res) => {
            setRecipes(res);
        });
    }, [recipeService]);

    return (
        <SectionRightStyle>
            <SearchField></SearchField>
            {recipes.map((recipe: any) =>
                <RecipesSmall key={recipe._id} recipe={recipe} />
            )}
            {/* <RecipesSmall></RecipesSmall> */}
        </SectionRightStyle >
    )
}

export default SectionRight