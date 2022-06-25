import React from 'react'
import {
  Button,
  Col,
  DatePicker,
  Input,
  Rate,
  Row,
  Space,
  Typography,
} from 'antd'
import Title from '@nexys/components/Typography/Title'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/dist/client/image'
import classes from 'views/Explore/ExploreDetail/ExploreDetail.module.scss'
import Link from 'next/link'
import { Select, Avatar, Card } from 'antd'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import router from 'next/router'
import Meta from 'antd/lib/card/Meta'
import Quill from '@nexys/components/TextQuill/TextQuill'
import CodeViewer from '@nexys/components/CodeViewer/CodeViewer'
import FRangePicker from '@nexys/fields/FRangePicker/FRangePicker'

const { Option } = Select

function TalentDetail() {
  const [isSearch, setIsSearch] = React.useState<boolean>(false)
  const data = {
    id: '123',
  }
  return (
    <>
      <Row
        gutter={[8, 10]}
        style={{
          paddingTop: 50,
          backgroundColor: 'grey',
        }}
        justify="space-between"
      >
        <Col
          flex={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            width={500}
            height={400}
            src={'/static/images/development.png'}
            alt={'illustration'}
          />
        </Col>
        <Col flex={2}>
          <Typography.Title
            style={{
              color: 'white',
              paddingBottom: 30,
            }}
          >
            Crystal Widjaja
          </Typography.Title>
          <Typography
            style={{
              fontSize: 20,
              color: 'white',
            }}
          >
            26 th
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              color: 'white',
              paddingBottom: 90,
            }}
          >
            Software Engineer
          </Typography>

          <Rate value={3.5} allowHalf />
        </Col>
      </Row>
      <Typography.Title
        style={{
          paddingTop: 80,
          paddingLeft: 90,
        }}
      >
        Description
      </Typography.Title>

      <Typography
        style={{ maxWidth: '50%', paddingLeft: 30, textAlign: 'justify' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tortor
        ex, scelerisque eget urna nec, auctor egestas enim. Vivamus hendrerit ac
        elit ac aliquam. Aliquam eget arcu tempus, dictum diam at, tempus elit.
        Fusce ante tortor, fermentum eu fermentum eu, lacinia et nisl. Nullam
        malesuada ante at elit feugiat, nec facilisis est luctus. Duis felis
        diam, aliquam interdum rutrum ac, elementum sed sem. Duis id elit
        convallis, placerat erat ac, posuere dolor. In eget massa in ex volutpat
        tristique. Pellentesque neque odio, ultricies at maximus non, aliquet
        sit amet velit. Fusce pretium consectetur justo, ac facilisis ligula
        suscipit sed. Quisque eleifend lorem in diam volutpat bibendum. Donec
        eros ligula, vestibulum non facilisis at, faucibus vel justo. Etiam arcu
        felis, venenatis ac orci pulvinar, cursus tincidunt nulla. Pellentesque
        egestas at sem ut mollis. Duis est nunc, hendrerit nec convallis id,
        facilisis sit amet magna. Aenean iaculis enim venenatis euismod luctus.
        Pellentesque convallis, enim nec fermentum porttitor, ipsum sapien
        varius est, vitae interdum lectus tortor id dolor. Sed et semper lectus.
        Sed consectetur turpis sem, ut porta dui accumsan eget. Curabitur
        interdum risus et dui volutpat, ac luctus diam porttitor. Vestibulum
        efficitur aliquam velit, eget convallis ex sagittis at. Donec felis
        arcu, consectetur ut aliquam at, lacinia a orci. Donec pretium tortor
        sit amet arcu faucibus pulvinar. Phasellus aliquam non massa ut varius.
        Cras placerat, lacus ultrices interdum consequat, orci lorem viverra
        diam, sed accumsan orci est sed sem. Mauris pulvinar neque at tortor
        porttitor congue. Fusce non purus mollis, congue nunc at, dictum orci.
        Nullam purus magna, pulvinar eget orci vel, aliquet iaculis elit.
        Pellentesque volutpat ac justo eget mollis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse interdum pharetra auctor.
      </Typography>
      <Typography.Title
        style={{
          paddingTop: 80,
          paddingLeft: 90,
          paddingBottom: 30,
        }}
      >
        Snapshot
      </Typography.Title>
      <Space
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Card
          hoverable
          style={{ width: 240, borderRadius: 30 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, borderRadius: 30 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, borderRadius: 30 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 350, borderRadius: 30 }}
          cover={
            <img
              style={{
                borderRadius: 30,
              }}
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Space>
      <Typography.Title
        style={{
          paddingTop: 80,
          paddingLeft: 90,
          paddingBottom: 30,
        }}
      >
        Job Description
      </Typography.Title>

      {/* <Quill
        style={{
          width: '50%',
          height: 400,
          paddingLeft: '5%',
          paddingBottom: '5%',
        }}
      /> */}
      <div
        style={{
          paddingLeft: '5%',
          paddingBottom: '5%',
        }}
      >
        <DatePicker.RangePicker
          style={{ width: '20%', borderRadius: 30, height: 50 }}
        />
      </div>
      <div style={{
        paddingLeft: "5%"
      }}>
        <Button style={{ minWidth: '40%' }} size="middle" type={'primary'}>
          Transaction
        </Button>
      </div>
    </>
  )
}

export default TalentDetail
