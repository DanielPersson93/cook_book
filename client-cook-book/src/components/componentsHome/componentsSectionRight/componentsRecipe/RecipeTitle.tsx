import styled from "styled-components";
interface IRecipeTitle {
    children?: React.ReactNode
}
const RecipeTitleStyle = styled.h4`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 0px;
text-align: center;
`
const RecipeTitle = ({ children }: IRecipeTitle) => (

    <RecipeTitleStyle>
        {children}
    </RecipeTitleStyle>
)

export default RecipeTitle
