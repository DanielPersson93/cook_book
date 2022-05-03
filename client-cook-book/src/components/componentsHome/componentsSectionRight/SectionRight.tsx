import SearchField from "./SearchField";
import RecipesSmall from './RecipesSmall'
import styled from "styled-components";
const SectionRightStyle = styled.div`
width: 715px;
height: 221px;
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