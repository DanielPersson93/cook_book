import styled from "styled-components"

const BackToHomeStyled = styled.div`
background: #006F39;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
width: 688px;
height: 101px;
transform:translate(0, -139%);
margin:0;
display:flex;
justify-content:center;
align-items:center;
color: #FFFFFF;
transition:ease-in .4s;
&:hover{
    background: #02B961;
    color:black;
    transition:ease-in .4s;
    
}
&:active{
    box-shadow: inset 2px 6px 4px rgba(0, 0, 0, 0.25);

}
`

const BackToHomeTextStyled = styled.h1`
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;

`

const BackToHomeLinkStyled = styled.a`
text-decoration:none;
`

const BackToHome = () => {
    return (
        <BackToHomeLinkStyled href="/">
            <BackToHomeStyled>
                <BackToHomeTextStyled>Back to home</BackToHomeTextStyled>
            </BackToHomeStyled>
        </BackToHomeLinkStyled>
    )
}

export default BackToHome