import styled from 'styled-components';
interface TitleText {
    children?: React.ReactNode
}

const TitleWrapper = styled.div`

font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 48px;
text-align: center;
letter-spacing: 2em;
text-align:center;
`

const Title = ({ children }: TitleText) => (
    <TitleWrapper>
        <h1>{children}</h1>
    </TitleWrapper>
)


export default Title