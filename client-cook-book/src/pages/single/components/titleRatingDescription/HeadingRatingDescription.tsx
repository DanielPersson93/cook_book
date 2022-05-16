import styled from "styled-components";
import DescriptionField from "./DescriptionField";
import TimeToCook from "./TimeToCook";
import TitleRating from './TitleRating'

const HeadingRatingDescriptionStyled = styled.div`
width: 688px;
height: 200px;
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
margin-top:1rem;
margin-right:1rem;
`

const HeadingRatingDescription = ({ recipe }: any) => (
    <HeadingRatingDescriptionStyled>
        <TitleRating recipe={recipe} />
        <DescriptionField>{recipe?.description}</DescriptionField>
        <TimeToCook>{recipe?.timeInMin}</TimeToCook>
    </HeadingRatingDescriptionStyled>
)

export default HeadingRatingDescription