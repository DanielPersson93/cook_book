import styled from "styled-components"
import { IRecipes } from "../../../../interface/recipe";
import RatingsContainer from "./RatingsContainerStyled"
import Title from "./Title"

const TitleRatingStyled = styled.div`
display:flex;
justify-content:space-between;
`
interface IRecipeProp {
    recipe: IRecipes;
}
const TitleRating = ({ recipe }: IRecipeProp) => (
    <TitleRatingStyled >
        <Title>{recipe?.title}</Title>
        <RatingsContainer />
    </TitleRatingStyled>
)

export default TitleRating