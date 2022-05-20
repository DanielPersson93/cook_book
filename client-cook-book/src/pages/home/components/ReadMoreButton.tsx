import { Link } from "react-router-dom";
import styled from "styled-components"

interface IReadMoreButton {
    link: string;
    children: React.ReactNode;
}

const ReadMoreButtonStyle = styled.button`
background: #148E00;
width: 130px;
height: 30px;
color:white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 50px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-align:center;
align-self:center;
border:none;
transition:ease-in .4s;
&:hover{
    transition:ease-in .4s;
    color:black;
    background:#9AFF89;
}
&:active{
    box-shadow: inset 2px 6px 4px rgba(0, 0, 0, 0.25);
}
`

const ReadMoreButton = ({ children, link }: IReadMoreButton) => (
    <Link to={`/${link}`}>
        <ReadMoreButtonStyle>
            {children}
        </ReadMoreButtonStyle>
    </Link>
)

export default ReadMoreButton