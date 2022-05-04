import styled from "styled-components"
import RecipeRating from "./RecipeRating"
import RecipeTitle from "./RecipeTitle"


const RecipeTitleAndRatingStyle = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:0;
`
const RecipeTitleAndRating = () => (
    <RecipeTitleAndRatingStyle>
        <RecipeTitle>Pannkakor</RecipeTitle>
        <RecipeRating></RecipeRating>
    </RecipeTitleAndRatingStyle>

)

export default RecipeTitleAndRating