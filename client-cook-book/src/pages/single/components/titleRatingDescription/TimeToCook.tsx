import styled from "styled-components";
import { IDesctiptionField } from "../../../../interface/Interface";

const TimeToCookStyled = styled.h3`
text-align:left;
margin-left:2rem;
`

const TimeToCook = ({ children }: IDesctiptionField) => (
    <TimeToCookStyled>{children}</TimeToCookStyled>
)

export default TimeToCook;