import styled from "styled-components";

const InstructionsStyled = styled.div`
background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
width: 428px;
height: 389px;
margin-left:24px;
transform:translate(0, -45%);
`

const TitleStyled = styled.h1`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
margin: 1rem;
 `
const InstructionsUlStyled = styled.ul`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align:left;
list-style:none;
margin:1rem;
padding:0;
text-transform:capitalize;
`
const StyledBoldInSpan = styled.span`
font-weight:bold;
`


const Instructions = ({ recipe }: any) => {
    return (
        <InstructionsStyled>
            <TitleStyled>Följ Dessa Steg</TitleStyled>
            <InstructionsUlStyled>{recipe?.instructions.map((i: any) => (<li key={i.prio}><StyledBoldInSpan>{i.prio}</StyledBoldInSpan>. {i.instruction}</li>))}</InstructionsUlStyled>
        </InstructionsStyled >
    )
}

export default Instructions