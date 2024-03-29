import { Space } from 'antd'
import { FunctionComponent } from 'react'
import styled from "styled-components"
import { TalentModel } from '../../models/TalentModel'

const CardComponent = styled.div<{ color: string }>(props => {
    return {
        position: 'relative',
        minWidth: 120,
        paddingTop: 4,
        paddingBottom: 10,
        background: `linear-gradient(90deg, rgba(${props.color},0.3) 33%, rgba(0,0,0,0.2) 100%)`,
        color: '#fff',
        "&:hover": {
            backgroundColor: `rgb(${props.color})`,
            fontWeight: 700,
        }
    }
})

interface IProps {
    talent: TalentModel.ITalentModel
    color: string
}

export const TalentCard: FunctionComponent<IProps> = (props: IProps) => {
    const { talent, color } = props

    return (
        <CardComponent color={color}>
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: `rgb(${color})`,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: 4,
                }}
            />
            <Space
                direction='vertical'
                size={0}
                style={{
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <img
                    src={talent.icon}
                    alt={talent.name}
                    height={60}
                />
                <span style={{ whiteSpace: 'pre-wrap' }}>
                    {talent.name}
                </span>
            </Space>
        </CardComponent>
    )
}