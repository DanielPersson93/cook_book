import styled from "styled-components";
import starYellow from '../../../../assets/starYellow.svg'

const RatingsContainerStyled = styled.div`
display:flex;
justify-content:space-around;
width:30px;
height:30px;
margin-top:24px;
margin-right:3rem;
`
const RatingsNumbers = styled.p`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
margin-top:3px;
`

const RatingsContainer = ({ recipe }: any) => (
    <RatingsContainerStyled>
        <img src={starYellow} alt="" />
        <RatingsNumbers>
            {recipe?.ratings.reduce((prev: number, curr: number) => {
                return prev + curr / recipe.ratings.length;
            }, 0)}
        </RatingsNumbers>
    </RatingsContainerStyled>

)

export default RatingsContainer
