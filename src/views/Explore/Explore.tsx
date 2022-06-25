import React from 'react'
import { Button, Col, Input, Row, Space, Typography, } from 'antd'
import Title from '@nexys/components/Typography/Title'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import { Select, Avatar, Card } from 'antd'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import router from 'next/router'

const { Option } = Select

function ListTalent() {
  const [isSearch, setIsSearch] = React.useState<boolean>(false)
  const data = {
    id: "123"
  }
  return (
    <>
      <Row
        gutter={[10, 10]}
        style={{
          paddingTop: 50,
          paddingBottom: 100,
        }}
      >
        <Col xs={24} sm={12}>
          <Title
            color={'red'}
            style={{ paddingLeft: '10%', paddingBottom: 40 }}
          >
            Explore Our Talent
          </Title>
          <Row justify="start" style={{ paddingBottom: 30 }}>
            <Col xs={10} sm={6}>
              <Title style={{ paddingLeft: '5%' }} level={5}>
                Category
              </Title>
            </Col>
            <Col>
              <Select style={{ width: 400, height: 40, borderRadius: 30 }}>
                <Option value="jack">
                  <Typography.Title level={5}>Lonte</Typography.Title>
                </Option>
              </Select>
            </Col>
          </Row>
          <Row justify="start">
            <Col xs={10} sm={6}>
              <Title style={{ paddingLeft: '5%' }}>Name</Title>
            </Col>
            <Col>
              <Input
                placeholder="Lisa"
                style={{ width: 400, height: 40, borderRadius: 30 }}
              />
            </Col>
          </Row>
          <a href="/explore" style={{
            paddingLeft: '10%'
          }}>
            <Button
              style={{
                width: 200,
                marginTop: 30,
                
              }}
              size="large"
              type={'primary'}
              onClick={() => setIsSearch(true)}
            >
              Search
            </Button>
          </a>
        </Col>

        <Col xs={24} sm={11}>
          <Image
            width={500}
            height={400}
            src={'/static/images/development.png'}
            alt={'illustration'}
          />
        </Col>
      </Row>
      <Row gutter={16} justify="center">
      <Card
          style={{ maxWidth: 1000, marginBottom: 30 }}
          title={
            <>
              <Typography.Title level={3}>Crystal Widjaja</Typography.Title>
              <br />
              26th | SPG Gudang Uyah
            </>
          }
          hoverable
          onClick={() => console.log('bisaa')}
        >
          <Space direction="horizontal">
            {/* <Avatar size={200} icon={<UserOutlined />} /> */}
            <Space direction="vertical">
              <Typography.Title level={4}>
                Status: <span style={{ color: 'green' }}>Available</span>
              </Typography.Title>
              After the devastating events of Avengers: Infinity War (2018), the
              universe is in ruins. With the help of remaining allies, the
              Avengers assemble once more in order to reverse Thanos' actions
              and restore balance to the universe.
            </Space>
          </Space>
        </Card>
        <Card
          style={{ maxWidth: 1000 }}
          title={
            <>
              <Typography.Title level={3}>Crystal Widjaja</Typography.Title>
              <br />
              26th | SPG Gudang Uyah
            </>
          }
          hoverable
          
          onClick={() => router.push(`/explore/${data.id}`)}
        >
          <Space direction="horizontal">
            {/* <Avatar size={200} icon={<UserOutlined />} /> */}
            <Space direction="vertical">
              <Typography.Title level={4}>
                Status: <span style={{ color: 'green' }}>Available</span>
              </Typography.Title>
              <Typography style={{paddingBottom: 30}}>
              After the devastating events of Avengers: Infinity War (2018), the
              universe is in ruins. With the help of remaining allies, the
              Avengers assemble once more in order to reverse Thanos' actions
              and restore balance to the universe.
                </Typography> 
                <Button size="large" type={'primary'}>
              8.4
            </Button>
            </Space>
          </Space>
        </Card>
      </Row>
    </>
  )
}

export default ListTalent
