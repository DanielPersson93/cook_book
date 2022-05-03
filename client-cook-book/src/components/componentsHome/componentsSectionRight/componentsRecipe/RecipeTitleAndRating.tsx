import styled from "styled-components"
import RecipeRating from "./RecipeRating"
import RecipeTitle from "./RecipeTitle"


const RecipeTitleAndRatingStyle = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const RecipeTitleAndRating = () => (
    <RecipeTitleAndRatingStyle>
        <RecipeTitle>Pannkakor</RecipeTitle>
        <RecipeRating></RecipeRating>
    </RecipeTitleAndRatingStyle>

)

export default RecipeTitleAndRating