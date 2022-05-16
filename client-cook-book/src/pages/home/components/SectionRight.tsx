import SearchField from "./SearchField";
import RecipesSmall from './RecipesSmall'
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IRecipes } from "../../../interface/recipe";

const SectionRightStyle = styled.div`
width: 715px;
height: 779px;;
margin-right:3rem;
`

const SectionRight = () => {
    const recipes: IRecipes[] = useSelector((state: any) => state.recipeReducer.recipes);
    return (
        <SectionRightStyle>
            <SearchField></SearchField>
            {recipes.map((recipe: IRecipes) =>
                <RecipesSmall key={recipe._id} recipe={recipe} />
            )}
        </SectionRightStyle >
    )
}

export default SectionRight