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
transition: ease-in 0.5s;
&:hover{
    color:#16a300;
    /* transform:scale(1.1); */
    transition: ease-in 0.5s;
}
&:active{
    color:#16a300;

}
`

export default CategoryList