import React from 'react'
import {
  Col,
  Input,
  Rate,
  Row,
  Typography,
  DatePicker,
  Button
} from 'antd'
import Image from 'next/dist/client/image'
import { Select, Avatar, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Quill from '@nexys/components/TextQuill/TextQuill'
import  moment from 'moment'

const { Option } = Select
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;

function TalentDetail() {
  const [isSearch, setIsSearch] = React.useState<boolean>(false)
  const data = {
    id: '123',
  }
  return (
    <>
      <Row
        gutter={[10, 10]}
        style={{
          backgroundColor: 'grey',
        }}
        justify="space-between"
      >
        <Col
          xs={24}
          sm={12}
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
          paddingLeft: 30,
        }}
      >
        Description
      </Typography.Title>
      <Typography.Paragraph
        style={{
          paddingLeft: 30,
          textAlign: 'justify',
          maxWidth: "80%"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
        elementum lacus, sit amet volutpat tellus. Suspendisse auctor dolor quis
        lacus suscipit vulputate. Pellentesque a lorem elit. Pellentesque ac
        efficitur tortor, non gravida ante. Integer nisl odio, suscipit non orci
        non, viverra aliquam erat. Quisque aliquet porta ipsum et convallis. Nam
        tempor eget massa id condimentum. Nullam aliquam, elit nec ornare
        scelerisque, justo mauris aliquam velit, quis placerat dui sapien a
        augue. Fusce vitae metus fringilla, cursus nisi quis, vulputate sem.
        Vestibulum quis ante dapibus, viverra metus auctor, aliquam arcu.
        Aliquam at leo a mauris ultricies interdum ut ut nulla. Ut eu
        scelerisque quam, eu lobortis nisl. Vestibulum sed auctor nunc. Morbi
        placerat blandit lacus ut dictum. Pellentesque magna ante, pretium sed
        venenatis id, mollis eget purus. Nam vitae mauris lorem. Suspendisse vel
        lacus nec eros molestie sollicitudin non non leo. Proin dapibus diam nec
        neque rhoncus, ac dignissim ante mollis. Curabitur tempor eu libero eget
        eleifend. Vivamus lacinia sem et arcu interdum, ut iaculis diam
        dignissim. In sit amet augue rhoncus, maximus dolor sit amet,
        sollicitudin tellus. Pellentesque placerat in augue a tempor. Proin
        porta velit in massa convallis, eget pulvinar nunc tempor. Sed hendrerit
        at justo rhoncus tristique. Praesent tincidunt sapien vitae ipsum
        auctor, eget feugiat sapien blandit. Vestibulum sapien elit, porttitor
        ut massa non, pharetra dapibus sem. Suspendisse dictum, risus et
        condimentum auctor, erat nisi suscipit urna, et convallis purus magna
        scelerisque sem. Aenean posuere posuere luctus. Vivamus tincidunt, nunc
        nec aliquet tristique, ipsum odio convallis elit, a imperdiet risus elit
        non orci. Maecenas pellentesque euismod ligula, vel lobortis magna.
        Nullam non nulla nibh. Aenean nec lacinia ante, luctus interdum sapien.
        Aenean suscipit metus id dui rhoncus ornare sit amet ac sem. Etiam neque
        lacus, condimentum vel nibh at, lacinia dapibus libero
      </Typography.Paragraph>

      <Typography.Title
        style={{
          paddingTop: 80,
          paddingLeft: 30,
          paddingBottom: 30,
        }}
      >
        Snapshot
      </Typography.Title>
      <Row justify="space-around">
        <Col>
          <Card
            hoverable
            style={{ width: 350, borderRadius: 30, marginBottom: 30 }}
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
        </Col>
        <Col>
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
        </Col>

        <Col>
          <Card
            hoverable={true}
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
        </Col>

        <Col>
          <Card
            hoverable
            style={{ width: 350, borderRadius: 30 }}
            cover={
              <img
                style={{
                  borderRadius: 30,
                }}
                alt="example"
                src="https://cf.shopee.co.id/file/1740a66d75c848b38c85ade20a2505e2"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
      <Typography.Title level={3}
        style={{
          paddingTop: 80,
          paddingLeft: 30,
        }}
      >
        Job Title
      </Typography.Title>


      <Input style={{
        width: "40%",
        height: 50,
        marginLeft: 30,
        borderRadius: 30
      }} />
      
      <Typography.Title level={3}
        style={{
          paddingTop: 80,
          paddingLeft: 30,
        }}
      >
        Job Date
      </Typography.Title>
      <RangePicker
      style={{
        borderRadius: 30,
        minWidth: "30%",
        height: 50,
        marginLeft: 30
      }}
      // defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
      <Typography.Title level={3}
        style={{
          paddingTop: 80,
          paddingLeft: 30,
        }}
      >
        Job Description
      </Typography.Title>
        <Quill style={{
          width: "50%",
          height: 300,
          paddingLeft: 30,
          paddingBottom: 30
        }}/>
        <a href={`/transaction/123`}>

        <Button
              style={{
                minWidth: 200,
                marginTop: 30,
                marginLeft: 30
              }}
              size="large"
              type={'primary'}
            >
              Submit Transaction
            </Button>
        </a>
    </>
  )
}

export default TalentDetail
