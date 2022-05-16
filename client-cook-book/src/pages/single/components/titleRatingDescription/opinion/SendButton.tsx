import styled from "styled-components"
import { IButtonText } from "../../../../../interface/Interface"

const SendButtonStyled = styled.button`
background: #148E00;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 50px;
border:none;
width: 130px;
height: 30px;
color:white;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
`

const SendButton = ({ children, onClick }: IButtonText) => (
    <SendButtonStyled onClick={onClick}>{children}</SendButtonStyled>
)

export default SendButton