import styled from "styled-components";
import { IImage } from "../../../interface/Interface";

const RecipeImgStyled = styled.img`
background:black;
width: 200px;
height: 200px;
margin-left:10px;
`

const RecipeImg = ({ imageUrl }: IImage) => (
    <RecipeImgStyled src={imageUrl}></RecipeImgStyled>
)

export default RecipeImg