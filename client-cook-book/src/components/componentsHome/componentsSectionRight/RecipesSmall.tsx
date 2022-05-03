import styled from "styled-components";
import ReadMoreButton from "./componentsRecipe/ReadMoreButton";
import RecipeImg from "./componentsRecipe/RecipeImg";
import RecipeText from "./componentsRecipe/RecipeText";
import RecipeTitleAndRating from "./componentsRecipe/RecipeTitleAndRating";

const RecipeContainer = styled.div`
/* display:flex;
flex-direction:column;
flex-wrap:wrap; */
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
margin-bottom:1rem;
`

const RecipeSmall = () => (
    <RecipeContainer>
        <RecipeImg />
        <RecipeTitleAndRating />
        <RecipeText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio fuga officiis suscipit modi repellendus obcaecati temporibus, cupiditate quos! Suscipit provident facilis nobis hic nemo praesentium omnis incidunt sapiente delectus.</RecipeText>
        <ReadMoreButton>Läs mer</ReadMoreButton>



    </RecipeContainer>
)

export default RecipeSmall