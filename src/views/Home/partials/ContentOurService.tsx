import React from 'react'
import { Button, Col, Row, Typography, Avatar } from 'antd'
import Title from '@nexys/components/Typography/Title'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons'

function ContentAboutMe() {
  return (
    <Row
      gutter={[10, 0]}
      style={{
        paddingBottom: 50,
      }}
    >
      <Col xs={24} sm={12}>
        <Title
          noMargin
          style={{
            padding: 6,
            color: '#D61F26',
            fontWeight: 'bolder',
            fontSize: 24,
          }}
        >
          Our Service
        </Title>
        <br />
        <Typography
          style={{
            fontSize: 20,
            paddingBottom: 50,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry :
        </Typography>

        <Row
          gutter={[10, 0]}
          justify="space-around"
          style={{
            paddingBottom: 100,
          }}
        >
          <Avatar size={64} icon={<UserOutlined />} />
          <Avatar size={64} icon={<UserOutlined />} />
          <Avatar size={64} icon={<UserOutlined />} />
          <Avatar size={64} icon={<UserOutlined />} />
          <Avatar size={64} icon={<UserOutlined />} />
        </Row>
        <Link href="/explore">
          <a>
            <Button size="large" type={'primary'}>
              Explore Our Talents
            </Button>
          </a>
        </Link>
      </Col>
      <Col xs={24} sm={12}>
        <Image
          width={500}
          height={450}
          src={'/static/images/successful-leader.png'}
          alt={'illustration'}
        />
      </Col>
    </Row>
  )
}

export default ContentAboutMe
