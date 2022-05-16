import styled from "styled-components"
import RecipeRating from "./RecipeRating"
import RecipeTitle from "./RecipeTitle"

const RecipeTitleAndRatingStyle = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:0;
`

interface RecipeTitleAndRatingProps {
    title: string;
    ratings: number[];
}

const RecipeTitleAndRating = ({ title, ratings }: RecipeTitleAndRatingProps) => (
    <RecipeTitleAndRatingStyle>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeRating ratings={ratings}></RecipeRating>
    </RecipeTitleAndRatingStyle>
)

export default RecipeTitleAndRating