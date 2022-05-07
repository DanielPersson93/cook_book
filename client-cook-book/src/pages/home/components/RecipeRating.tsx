import { useEffect, useState } from "react";
import styled from "styled-components"
import starYellow from '../../../assets/starYellow.svg'

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


interface RecipeRatingProps {
    ratings: number[];
}
const RecipeRating = ({ ratings }: RecipeRatingProps) => {
    const [ratingLevel, setRatingLevel] = useState(0);

    useEffect(() => {
        if (ratings && ratings.length > 0) {
            const rating = ratings.reduce((prev: number, curr: number) => {
                return prev + curr;
            }, 0)
            setRatingLevel(rating / ratings.length);
        }
    }, [ratings])

    return (
        <RecipeRatingStyle>
            <img src={starYellow} alt="Start icon" />

            <p>{ratingLevel}/5</p>
        </RecipeRatingStyle>
    )
}

export default RecipeRating