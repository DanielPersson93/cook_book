import styled from "styled-components";
import CategoryList from "./CategoryList";
import CategoryTitle from "./CategoryTitle";

const SectionLeftStyle = styled.div`
display:flex;
flex-direction:column;
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
width: 305px;
height: 779px;
margin-right:3rem;
`;
const CategoryUlStyle = styled.ul`
list-style:none;
margin-left:3rem;
padding:0;

`



const SectionLeft = () => (
    <SectionLeftStyle>
        <CategoryTitle>Kategorier</CategoryTitle>
        <CategoryUlStyle>
            <CategoryList>Förrätt</CategoryList>
            <CategoryList>Varmrätt</CategoryList>
            <CategoryList>Eftrrätt</CategoryList>
        </CategoryUlStyle>
    </SectionLeftStyle>

)
export default SectionLeft