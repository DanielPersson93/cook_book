import styled from "styled-components";
import CategoryList from "./CategoryList";
import CategoryTitle from "./CategoryTitle";
import { useEffect, useState } from "react";

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
text-transform: capitalize;

`;

const SectionLeft = () => {


    const [recipesTitle, setRecipeTitle] = useState([]);

    useEffect(() => {
        const loadRecipeTitles = async () => {
            const res = await fetch('http://localhost:4000/categories');
            const recipesTitle = await res.json();
            setRecipeTitle(recipesTitle)
        }
        loadRecipeTitles();
    }, []);

    return (
        <SectionLeftStyle>
            <CategoryTitle>Kategorier</CategoryTitle>
            <CategoryUlStyle>
                {recipesTitle.map((title: string) => (<CategoryList key={title}>{title}</CategoryList>))}
            </CategoryUlStyle>
        </SectionLeftStyle>
    )
}


export default SectionLeft