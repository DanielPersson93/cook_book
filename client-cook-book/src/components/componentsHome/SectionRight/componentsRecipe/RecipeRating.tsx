import styled from "styled-components"
import starYellow from '../../../../assets/starYellow.svg'

const RecipeRatingStyle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
width: 39px;
height: 29px;
display: flex;
align-items: center;
`



const RecipeRating = () => (
    <RecipeRatingStyle>
        <img src={starYellow} alt="" />
        <p><span>{"1"}</span>/5</p>

    </RecipeRatingStyle>

)

export default RecipeRating