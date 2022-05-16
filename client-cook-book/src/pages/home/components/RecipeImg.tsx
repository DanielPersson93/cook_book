import styled from "styled-components";

const RecipeImgStyled = styled.img`
background:black;
width: 200px;
height: 200px;
margin-left:10px;
`

const RecipeImg = ({ imageUrl }: any) => (
    <RecipeImgStyled src={imageUrl}></RecipeImgStyled>
)

export default RecipeImg