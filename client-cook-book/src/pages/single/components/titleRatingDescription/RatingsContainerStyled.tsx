import { useEffect, useState } from "react";
import styled from "styled-components";
import starYellow from '../../../../assets/starYellow.svg'
import { useSelector } from "react-redux";

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

const RatingsContainer = () => {
    const [ratingLevel, setRatingLevel] = useState(0);
    const reviews = useSelector((state: any) => state.reviewReducer.reviews);

    useEffect(() => {
        // console.log(reviews);
        if (!reviews || reviews.length === 0) return;

        const rating = reviews.reduce((prev: number, curr: number) => {
            return prev + curr;
        }, 0)
        setRatingLevel(rating / reviews.length);
    }, [reviews])
    return (
        <RatingsContainerStyled>
            <img src={starYellow} alt="" />
            <RatingsNumbers>
                {Math.round(ratingLevel * 100) / 100}
            </RatingsNumbers>
        </RatingsContainerStyled>
    )
}

export default RatingsContainer