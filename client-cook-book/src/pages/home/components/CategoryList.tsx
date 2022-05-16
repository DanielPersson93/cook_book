import styled from "styled-components";

const CategoryList = styled.li`
font-family: 'Lato';
font-style: normal;
font-weight: bold;
text-decoration:underline;
font-size: 20px;
list-style:none;
text-align:left;
padding-top:0.5rem;
transition: ease-in 0.3s;
cursor:pointer;
&:hover{
    color:#16a300;
    transition: ease-in 0.3s;
}
`

export default CategoryList