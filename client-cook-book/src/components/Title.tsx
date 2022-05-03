import styled from 'styled-components';
interface TitleText {
    children?: React.ReactNode
}

const TitleWrapper = styled.div`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 48px;
text-align: center;
letter-spacing: 1em;`

const Title = ({ children }: TitleText) => (
    <TitleWrapper>
        <h1>{children}</h1>
    </TitleWrapper>
)


export default Title