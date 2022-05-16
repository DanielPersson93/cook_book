import styled from "styled-components"
import { IPlaceHolder } from "../../../../../interface/Interface"

const InputLeaveReviewStyled = styled.textarea`
border-radius: 3px;
width: calc(354px - 2rem);
height:calc(115px - 2rem);
padding:1rem;
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
border:none;
resize: none;
&:focus {
    outline: none;
}
`

const InputLeaveReview = ({ placeholder, setter }: IPlaceHolder) => (
    <InputLeaveReviewStyled onInput={((evt: any) => {
        setter(evt.target.value)
    })} placeholder={placeholder} />
)

export default InputLeaveReview