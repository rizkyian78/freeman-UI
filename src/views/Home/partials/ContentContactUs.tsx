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
          Get In Touch
        </Title>
        <br />
        <Typography
          style={{
            fontSize: 20,
            paddingBottom: 40
          }}
        >Currently we're looking for any talent who want to join us :
        </Typography>
          <a href={`mailto:test@example.com?subject=Asking About Talent Job!`} >
            <Button size="large" type={'primary'}>
              Say Hello
            </Button>
          </a>

      </Col>
    </Row>
  )
}

export default ContentAboutMe
