import styled from "styled-components";

const DescriptionStyled = styled.p`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align:left;
margin-left:2rem;
margin-right:4rem;
`


const DecsriptionField = ({ children }: any) => (
    <DescriptionStyled>
        {children}
    </DescriptionStyled>
)
export default DecsriptionField