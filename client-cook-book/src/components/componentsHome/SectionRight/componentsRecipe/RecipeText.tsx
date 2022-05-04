import { ReactNode } from "react";
import styled from "styled-components";
interface IRecipeText {
    children: React.ReactNode
}
const RecipeTextStyle = styled.p`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
`

const RecipeText = ({ children }: IRecipeText) => (

    <RecipeTextStyle>
        {children}
    </RecipeTextStyle>
)

export default RecipeText