import styled from "styled-components"

interface IReadMoreButton {
    children: React.ReactNode
}

const ReadMoreButtonStyle = styled.button`
background: #148E00;
color:white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 50px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
`





const ReadMoreButton = ({ children }: IReadMoreButton) => (
    <ReadMoreButtonStyle>
        {children}
    </ReadMoreButtonStyle>

)
export default ReadMoreButton