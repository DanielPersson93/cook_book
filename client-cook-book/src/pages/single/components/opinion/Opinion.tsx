import styled from "styled-components"

const OpinionStyled = styled.div`
        background: #85D29F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
width: 400px;
height: 322px;
margin-left:2rem;
transform:translate(0, 24px)
`
const OpinionTitle = styled.h1`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

`

const Opinion = () => {

    return (
        <OpinionStyled>
            <OpinionTitle>Lämna omdöme</OpinionTitle>
        </OpinionStyled>
    )
}

export default Opinion