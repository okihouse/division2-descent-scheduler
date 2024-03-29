import { ColProps } from "antd"

export namespace FormModel {
    export interface IFormBaseProps {
        name: string
        label?: string
        placeholder?: string
        progress?: boolean
        hasAll?: boolean
        isRequired?: boolean
        layout?: { xs?: { span: number }, sm?: { span: number }, lg?: { span: number } }
    }

    export const layout = (layout?: ColProps) => {
        return Object.assign({ xs: { span: 24 }, sm: { span: 24 }, lg: { span: 4 } } as ColProps, layout)
    }
}