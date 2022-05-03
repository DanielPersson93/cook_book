import styled from 'styled-components';
import SectionLeft from './componentsHome/SectionLeft/SectionLeft';
import SectionRight from './componentsHome/componentsSectionRight/SectionRight';


const StyleHome = styled.section`
display:flex;
justify-content:center
`


const Home = () =>
(
    <StyleHome>
        <SectionLeft></SectionLeft>
        <SectionRight></SectionRight>
    </StyleHome>
)


export default Home