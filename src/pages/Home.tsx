import { Col, Divider, Flex, Row, Space, Typography } from 'antd'
import { FunctionComponent, useEffect, useState } from 'react'
import Background from '../assets/background.jpg'
import { ScheduleModel } from '../models/ScheduleModel'
import { TalentModel } from '../models/TalentModel'
import { DescentType } from '../type/DescentType'
import { TalentCategory } from '../type/TalentCategory'
import DateUtils from '../utils/DateUtils'
import TalentUtils from '../utils/TalentUtils'
import { TalentContainerCard } from './card/TalentContainerCard'
import styled from 'styled-components'
import { RotationCountdown } from './countdown/RotationCountdown'

// [Wrong] Envy -> Sloth -> Gluttony -> Greed -> Wrath 
// This rotation system is entirely random.

const Li = styled.li({
    '&::marker': {
        color: '#fff'
    }
})

export const Home: FunctionComponent = () => {
    const [schedule, setSchedule] = useState<ScheduleModel>()
    const [talentSet, setTalentSet] = useState<TalentModel.ITalentSetModel>()

    const descentTypeDisplayName = (type: DescentType) => {
        switch (type) {
            case DescentType.envy:
                return '질투'
            case DescentType.greed:
                return '탐욕'
            case DescentType.gluttony:
                return '식탐'
            case DescentType.sloth:
                return '나태'
            case DescentType.wrath:
                return '분노'
        }
    }

    useEffect(() => {
        // 날짜 갖고오기   
        const s = DateUtils.schedule()
        if (s) {
            setSchedule(s)
        }

        // talent set 가져오기
        const t = TalentUtils.talent(DescentType.greed)
        if (t) {
            setTalentSet(t)
        }
    }, [])

    return (
        <div
            style={{
                width: '100%',
                minHeight: '100vh',
                background: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                justifyContent: 'center',
                display: 'flex'
            }}
        >
            <div
                style={{
                    maxWidth: 900,
                    paddingTop: 24,
                    paddingLeft: 12,
                    paddingRight: 12,
                }}
            >
                <Row gutter={[6, 6]}>
                    <Col span={24} style={{ marginBottom: 12, }}>
                        <Space direction='vertical'>
                            {schedule && (
                                <RotationCountdown end={schedule.end} />
                            )}
                            {talentSet && (
                                <Typography.Title level={4} style={{ color: '#fff', margin: 0 }} >
                                    {`Current: ${descentTypeDisplayName(talentSet.type)}`}
                                </Typography.Title>
                            )}
                        </Space>
                    </Col>
                    {talentSet && (
                        <Row gutter={[0, 12]}>
                            <Col span={24}>
                                <TalentContainerCard
                                    title='Exotic'
                                    category={TalentCategory.exotic}
                                    talents={talentSet.exotics}
                                />
                            </Col>
                            <Col span={24}>
                                <TalentContainerCard
                                    title='Offensive'
                                    category={TalentCategory.offensive}
                                    talents={talentSet.offensives}
                                />
                            </Col>
                            <Col span={24}>
                                <TalentContainerCard
                                    title='Defensives'
                                    category={TalentCategory.defensive}
                                    talents={talentSet.defensives}
                                />
                            </Col>
                            <Col span={24}>
                                <TalentContainerCard
                                    title='Utility'
                                    category={TalentCategory.utility}
                                    talents={talentSet.utilities}
                                />
                            </Col>
                        </Row>
                    )}
                    <Col span={24}>
                        <Divider style={{ backgroundColor: '#777', padding: 1 }} />
                        <Typography.Paragraph>
                            <ul>
                                <Li>
                                    <Typography.Text style={{ color: '#fff' }}>
                                        Some talent images are missing. If you have it, please forward it to the email address below.
                                    </Typography.Text>
                                </Li>
                                <Li>
                                    <Typography.Text style={{ color: '#fff', whiteSpace: 'pre-wrap' }}>
                                        {'Based on the data accumulated so far, the current rotation system is completely random.\nIf you have any other thoughts, please let me know!'}
                                    </Typography.Text>
                                </Li>
                                <Li>
                                    <Typography.Text style={{ color: '#fff' }}>
                                        Let me know your ideas! I need more information~
                                    </Typography.Text>
                                </Li>
                            </ul>
                        </Typography.Paragraph>
                    </Col>
                    <Col span={24}>
                        <Flex justify='end' align='baseline'>
                            <Space wrap size={'small'} split={"/"} style={{ color: '#fff', }}>
                                <Typography.Text style={{ color: '#aaa' }}>
                                    marked by agent okihouse1116(ps5)
                                </Typography.Text>
                                <Typography.Link href='mailto:okihouse16@gmail.com' style={{ color: '#aaa' }}>okihouse16@gmail.com</Typography.Link>
                                {/* <Typography.Link style={{ color: '#fff', }}>
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="github" width="1.1em" height="1.1em" fill="currentColor" aria-hidden="true"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                                </Typography.Link> */}
                            </Space>
                        </Flex>
                    </Col>
                </Row>
            </div>
        </div>
    )
}