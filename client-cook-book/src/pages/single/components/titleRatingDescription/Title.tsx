import styled from "styled-components";

const TitleStyled = styled.h1`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 29px;
margin-top:24px;
margin-left:2rem;
text-align: center;
`

const Title = ({ children }: any) => (
    <>
        <TitleStyled>{children}</TitleStyled>
    </>

)

export default Title