import styled from "styled-components";
import ReadMoreButton from "./ReadMoreButton";
import RecipeImg from "./RecipeImg";
import RecipeText from "./RecipeText";
import RecipeTitleAndRating from "./RecipeTitleAndRating";

const ArticleContainerRecipeStyled = styled.div`
display:flex;
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
height: 221px;
align-items:center;
margin-bottom:1rem;
`

const RecipeContainer = styled.div`
width:60%;
margin-left:1rem;
text-align:left;
`

const RecipeSmall = ({ recipe }: any) => (
    <ArticleContainerRecipeStyled>
        <RecipeImg imageUrl={recipe.imageUrl}></RecipeImg>
        <RecipeContainer>
            <RecipeTitleAndRating title={recipe.title} ratings={recipe.ratings} />
            <RecipeText>
                {recipe.description}
            </RecipeText>
            <ReadMoreButton link={recipe._id}>Läs mer</ReadMoreButton>
        </RecipeContainer>
    </ArticleContainerRecipeStyled>
)

export default RecipeSmall