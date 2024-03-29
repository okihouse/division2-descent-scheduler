import { Divider, Space, Typography } from 'antd'
import Countdown from 'antd/es/statistic/Countdown'
import { FunctionComponent, useEffect } from 'react'

interface IProps {
    end: string
}

export const RotationCountdown: FunctionComponent<IProps> = (props) => {
    const { end } = props

    useEffect(() => {

    }, [])

    return (
        <Space direction='vertical'>
            <Space direction='vertical' size={'small'}>
                <Typography.Title level={4} style={{ color: '#fff', margin: 0, }}>
                    Next Rotation:
                </Typography.Title>
                <Space size={'small'} split={<Divider type="vertical" style={{ backgroundColor: '#fff' }} />}>
                    <Typography.Title level={4} style={{ color: '#fff', margin: 0, }}>
                        {`${end}`}
                    </Typography.Title>
                    <Typography.Title level={4} style={{ color: '#fff', margin: 0, }}>
                        <Countdown value={end} valueStyle={{ color: '#fff' }} />
                    </Typography.Title>
                </Space>
            </Space>
        </Space>
    )
}