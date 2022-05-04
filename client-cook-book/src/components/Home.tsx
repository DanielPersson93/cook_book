import styled from 'styled-components';
import SectionLeft from './componentsHome/SectionLeft/SectionLeft';
import SectionRight from './componentsHome/SectionRight/SectionRight';


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