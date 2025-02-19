import React from 'react'
import { Col, Button, Row, Avatar, Drawer, Space } from 'antd'
import Text from '@nexys/components/Typography/Text'
import Link from 'next/link'
import BaseHeader, {
  BaseHeaderProps,
} from '@nexys/components/BaseHeader/BaseHeader'
import Title from '@nexys/components/Typography/Title'

function Header(props: BaseHeaderProps) {
  return (
    <BaseHeader {...props}>
      <Col flex={'none'}>
        <Row>
          <Col>
            <Link href={'/'}>
              <a>
                <Title
                  italic
                  noMargin
                  style={{ padding: 6, color: '#D61F26', fontWeight: 'bolder' }}
                >
                  Freeman
                </Title>
              </a>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col flex={'auto'} style={{ textAlign: 'end' }}>
        <Row justify="end">
          <Link href={'#contributors'}>
            <a>
              <Text fontFamily={'bold'}>About Us</Text>
            </a>
          </Link>

          <Link href={'#contributors'}>
            <a style={{ paddingLeft: 20 }}>
              <Text fontFamily={'bold'}>Services</Text>
            </a>
          </Link>
        </Row>
        {/* <Drawer
          title={`Menu`}
          placement="right"
          visible={true}
          // extra={
          //   <Space>

          //   </Space>
          // }
        >
          <div>
            <a>About Us</a>
          </div>
          <div>
            <a>Services</a>
          </div>
        </Drawer> */}
      </Col>
    </BaseHeader>
  )
}

export default Header
