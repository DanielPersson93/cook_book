import styled from "styled-components"
import RatingsContainer from "./RatingsContainerStyled"
import Title from "./Title"

const TitleRatingStyled = styled.div`
display:flex;
justify-content:space-between;
`

const TitleRating = ({ recipe }: any) => (
    <TitleRatingStyled >
        <Title>{recipe?.title}</Title>
        <RatingsContainer />
    </TitleRatingStyled>
)

export default TitleRating