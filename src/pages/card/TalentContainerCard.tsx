import { Col, Row, Typography } from 'antd'
import { FunctionComponent, useEffect, useState } from 'react'
import { TalentCategory } from '../../type/TalentCategory'
import { TalentCard } from './TalentCard'
import { TalentModel } from '../../models/TalentModel'

interface IProps {
    title: string,
    category: TalentCategory,
    talents: Array<TalentModel.ITalentModel>
}

export const TalentContainerCard: FunctionComponent<IProps> = (props: IProps) => {
    const { title, category, talents } = props

    const [color, setColor] = useState<string>('254,160,5')

    useEffect(() => {
        switch (category) {
            case TalentCategory.exotic:
                setColor('254,160,5')
                break
            case TalentCategory.offensive:
                setColor('241,65,60')
                break
            case TalentCategory.defensive:
                setColor('112,186,252')
                break
            case TalentCategory.utility:
                setColor('253,207,117')
                break
        }
    }, [])

    return (
        <Row gutter={[6, 6]}>
            <Col span={24}>
                <div
                    style={{
                        backgroundColor: 'rgba(256,256,256,0.15)',
                        padding: 8,
                    }}
                >
                    <Typography.Title level={4} style={{ color: '#fff', padding: 0, margin: 0, }}>
                        {title}
                    </Typography.Title>
                </div>
            </Col>
            {talents.map((r, idx: number) => {
                return (
                    <Col
                        key={idx}
                        {...{ xs: 12, lg: 6 }}
                    >
                        <TalentCard
                            talent={r}
                            color={color}
                        />
                    </Col>
                )
            })}
        </Row>
    )
}