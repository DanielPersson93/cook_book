import { ReactNode } from "react"
import styled from "styled-components"

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
interface IButtonText {
    children: ReactNode
}

const SendButton = ({ children }: IButtonText) => (
    <SendButtonStyled>{children}</SendButtonStyled>


)



export default SendButton