import { Col, Form, Input } from "antd"
import React, { CSSProperties, FunctionComponent } from "react"
import { FormModel } from "../../models/FormModel"

interface IProps extends FormModel.IFormBaseProps {
    onPressEnter?: () => void
    style?: CSSProperties
    children?: React.ReactNode
}

export const InputForm: FunctionComponent<IProps> = (props) => {
    const { name, label, placeholder, layout, style, children, onPressEnter } = props
    const formLayout = FormModel.layout(layout)

    return (
        <Col {...formLayout}>
            <Form.Item
                label={label || ''}
                name={name}
            >
                <Input
                    allowClear
                    placeholder={placeholder || "검색어를 입력하세요"}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if ((e.key === "Enter" || e.keyCode === 13) && onPressEnter) {
                            onPressEnter()
                        }
                    }}
                    style={style}
                />
                {children}
            </Form.Item>
        </Col>
    )
}