import styled from "styled-components";
import search from '../../../assets/search-icon.svg'
const SearchFieldContainerStyled = styled.div`
width: 715px;
height: 50px;
border: 3px solid #7C7C7C;
box-sizing: border-box;
border-radius: 7px;
display:flex;


`
const SearchFieldStyled = styled.input`
margin-left:0.5rem;
padding-left:1rem;
padding-right:1rem;
height: calc(100% - 14px);
width:100%;
align-self:center;
border:none;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
border-left:1px solid black;
textarea:focus{
    outline:none;
}
&:focus {
    outline: none;
}


`
const SearchField = () => (
    <SearchFieldContainerStyled>
        <img src={search} alt="Search Icon" />
        <SearchFieldStyled placeholder="Search..." />
    </SearchFieldContainerStyled>
)
export default SearchField