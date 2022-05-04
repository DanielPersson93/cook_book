import SearchField from "./SearchField";
import RecipesSmall from './RecipesSmall'
import styled from "styled-components";
const SectionRightStyle = styled.div`
width: 715px;
height: 779px;;
margin-right:3rem;
display:flex;
flex-direction:column;
justify-content:space-between;
`

const SectionRight = () => (
    <SectionRightStyle>
        <SearchField></SearchField>
        <RecipesSmall></RecipesSmall>
        <RecipesSmall></RecipesSmall>
        <RecipesSmall></RecipesSmall>
    </SectionRightStyle>
)

export default SectionRight