import { ReactNode } from "react"

export interface IPlaceHolder {
    placeholder: string
    setter: (evt: any) => any;
}

export interface IButtonText {
    children: ReactNode
    onClick: any
}

export interface IDesctiptionField {
    children: ReactNode;
}




