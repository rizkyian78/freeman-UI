import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import Title from '@nexys/components/Typography/Title'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/dist/client/image'
import Link from 'next/link'

function ContentAboutMe() {
  return (
    <Row
      gutter={[10, 0]}
      style={{
        paddingBottom: 50,
      }}
    >
      <Col xs={24} sm={12}>
        <Image
          width={500}
          height={450}
          src={'/static/images/development.png'}
          alt={'illustration'}
        />
      </Col>
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
          About Us
        </Title>
        <br />
        <Typography
          style={{
            fontSize: 20,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Col>
    </Row>
  )
}

export default ContentAboutMe