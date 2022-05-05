import styled from 'styled-components';
import SectionLeft from './components/SectionLeft';
import SectionRight from './components/SectionRight';


const HomeStyle = styled.section`
display:flex;
justify-content:center;
`


const Home = () =>
(
    <HomeStyle>
        <SectionLeft></SectionLeft>
        <SectionRight></SectionRight>
    </HomeStyle>
)


export default Home