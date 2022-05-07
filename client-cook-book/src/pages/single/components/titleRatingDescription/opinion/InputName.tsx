import { ReactNode } from "react"
import styled from "styled-components"
import { IPlaceHolder } from "../../../../../interface/Interface"

const InputNameStyled = styled.input`
border-radius: 3px;
width: calc(354px - 2rem);
padding:1rem;
height: calc(38px - 2rem);
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
margin-bottom:32px;
border:none;
&:focus {
   
    outline: none;
}
`



const InputName = ({ placeholder }: IPlaceHolder) => (
    <InputNameStyled placeholder={placeholder} />
)

export default InputName