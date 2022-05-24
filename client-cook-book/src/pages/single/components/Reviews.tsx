import styled from "styled-components"
import ReviewFeedbackBlock from "./ReviewFeedbackBlock"

const ReviewsStyled = styled.div`
width: 864px;
min-height: 739px;
background: #DCDCDC;
border-radius: 0px 3px 3px 3px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transform:translate(0, -105px);
margin:auto;
`

const ReviewTitleStyled = styled.h1`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 36px;
padding:1rem 2.5rem;
border-radius:50px;
width:150px;
margin:auto;
margin-top:2rem;
margin-bottom:2rem;
background-color:#006E39;
color:white;
`

const Reviews = ({ recipe }: any) => (
    <>
        <ReviewsStyled>
            <ReviewTitleStyled>Omdömde</ReviewTitleStyled>
            <ReviewFeedbackBlock recipe={recipe} />
        </ReviewsStyled>
    </>
)

export default Reviews