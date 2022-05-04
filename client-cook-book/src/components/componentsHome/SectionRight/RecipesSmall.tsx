import styled from "styled-components";
import ReadMoreButton from "./componentsRecipe/ReadMoreButton";
import RecipeImg from "./componentsRecipe/RecipeImg";
import RecipeText from "./componentsRecipe/RecipeText";
import RecipeTitleAndRating from "./componentsRecipe/RecipeTitleAndRating";


const ArticleContainerRecipeStyled = styled.div`
 display:flex;
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
height: 221px;
align-items:center;
`
const RecipeContainer = styled.div`
width:60%;
margin-left:1rem;
text-align:left;
`

const RecipeSmall = () => (
    <ArticleContainerRecipeStyled>
        <RecipeImg />
        <RecipeContainer>
            <RecipeTitleAndRating />
            <RecipeText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio fuga officiis suscipit modi repellendus obcaecati temporibus, cupiditate quos! Suscipit provident facilis nobis hic nemo praesentium omnis incidunt sapiente delectus.</RecipeText>
            <ReadMoreButton>Läs mer</ReadMoreButton>
        </RecipeContainer>
    </ArticleContainerRecipeStyled>
)

export default RecipeSmall