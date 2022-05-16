import styled from "styled-components";
import { IDesctiptionField } from "../../../../interface/Interface";

const TitleStyled = styled.h1`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 29px;
margin-top:24px;
margin-left:2rem;
text-align: center;
`

const Title = ({ children }: IDesctiptionField) => (
    <>
        <TitleStyled>{children}</TitleStyled>
    </>
)

export default Title