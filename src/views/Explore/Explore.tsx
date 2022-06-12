import React from 'react'
import { Button, Col, Input, Row, Typography } from 'antd'
import Title from '@nexys/components/Typography/Title'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import { Select } from 'antd'

const { Option } = Select

function ListTalent() {
  return (
    <>
      <Row
        gutter={[10, 10]}
        style={{
          paddingTop: 50,
        }}
      >
        <Col xs={24} sm={12}>
          <Title
            color={'red'}
            style={{ paddingLeft: '10%', paddingBottom: 40 }}
          >
            Explore Our Talent
          </Title>
          <Row justify="start" style={{paddingBottom: 30}}>
            <Col xs={6} sm={4}>
              <Title style={{ paddingLeft: '10%' }}>Category</Title>
            </Col>
            <Col>
              <Select style={{ width: 500, height: 40, borderRadius: 30 }}>
                <Option value="jack">
                  <Typography.Title level={3}>Lonte</Typography.Title>
                </Option>
              </Select>
            </Col>
          </Row>
          <Row justify="start">
            <Col xs={6} sm={4}>
              <Title style={{ paddingLeft: '10%' }}>Name</Title>
            </Col>
            <Col>
            <Input placeholder="Lisa"  style={{ width: 500, height: 40, borderRadius: 30 }} />
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={12}>
          <Image
            width={500}
            height={450}
            src={'/static/images/development.png'}
            alt={'illustration'}
          />
        </Col>
      </Row>
      {/* 
    <Row
      gutter={[10, 0]}
      style={{
        paddingTop: 50,
      }}
    >
      <Col xs={24} sm={12} >
        <Title>Category</Title>
      

      </Col>
      
    </Row> */}
    </>
  )
}

export default ListTalent
