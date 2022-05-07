import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { IRecipe, RecipeService } from "../../../services/recipe.service";


const IngredientsStyled = styled.ul`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
text-align:left;
text-transform:capitalize;
`

const IngredientsTitleStyled = styled.h1`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
margin: 1rem;
`
const IngredientsBlockStyled = styled.div`
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
width: 236px;
height: 389px;
transform:translate(0%, -45%);
`

const Ingredients = ({ recipe }: any) => {



    return (
        <IngredientsBlockStyled>
            <IngredientsTitleStyled>Ingredienser</IngredientsTitleStyled>
            <IngredientsStyled >{recipe?.ingredients.map((i: any) => (<li key={i.ingredient}>{i.amount}{i.unit} {i.ingredient}</li>))}</IngredientsStyled>
        </IngredientsBlockStyled>
    )
}
export default Ingredients