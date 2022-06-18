import React from 'react'
import { Button, Col, Row, Typography, Avatar } from 'antd'
import Title from '@nexys/components/Typography/Title'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons'
import LazyImgwrapper from '@nexys/components/LazyImgWrapper'

function ContentOurService() {
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
        </Row>
          <a href="/explore">
            <Button size="large" type={'primary'}>
              Explore Our Talents
            </Button>
          </a>
      </Col>
      <Col xs={24} sm={12}>


        <img
          width={500}
          height={450}
          src={'/static/images/development.png'}
          alt={'illustration'}
        />
      </Col>
    </Row>
  )
}

export default ContentOurService
