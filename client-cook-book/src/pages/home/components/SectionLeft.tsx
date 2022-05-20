import styled from "styled-components";
import CategoryList from "./CategoryList";
import CategoryTitle from "./CategoryTitle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryService } from "../../../services/category.service";

const SectionLeftStyle = styled.div`
display:flex;
flex-direction:column;
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
width: 305px;
height:100%;
margin-right:3rem;
`

const CategoryUlStyle = styled.ul`
list-style:none;
margin-left:3rem;
padding:0;
text-transform: capitalize;
`

const SectionLeft = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const categoryService = new CategoryService();

    useEffect(() => {
        categoryService.getCategories().then((categories) => {
            setCategories(categories)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeRoute = (cat: any) => {
        navigate('/category/' + cat._id[0].url);
    }

    return (
        <SectionLeftStyle>
            <CategoryTitle>Kategorier</CategoryTitle>
            <CategoryUlStyle>
                {categories.map((category: any) => (<CategoryList onClick={() => changeRoute(category)} key={category._id[0].name}>{category._id[0].name}{`(${category.count})`}</CategoryList>))}
            </CategoryUlStyle>
        </SectionLeftStyle >
    )
}

export default SectionLeft