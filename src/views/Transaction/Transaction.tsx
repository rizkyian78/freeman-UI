import React from 'react'
import { Button, Card, Col, Row, Typography } from 'antd'
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
      justify="center"
    >
        <Card title={
            <Typography.Title level={2}>Transaction Detail</Typography.Title>
        } style={{
            minWidth: "40%"
        }}>
        <Typography style={{
            fontSize: 20,
            paddingBottom: 30
        }}>Name: <b>Crystal Widjaja</b> </Typography>
        <Typography style={{
            fontSize: 20,
            paddingBottom: 30
        }}>Period: <b>29 Dec s/d 30 January</b> </Typography>
        <Typography style={{
            fontSize: 20
        }}>Amount: <b>Rp. 300.000,-</b> </Typography>
    <Card
      style={{ marginTop: 16, marginBottom: 50 }}
      type="inner"
      title="Job"
    >
        <Typography.Title level={3}>Job Title</Typography.Title>
        <Typography.Paragraph style={{
            fontSize: 16
        }}>Pengacara</Typography.Paragraph>
        <Typography.Title level={3}>Job Description</Typography.Title>
        <Typography.Paragraph style={{
            fontSize: 16
        }}>Pengacara</Typography.Paragraph>
    </Card>
    <Typography.Title level={2}>Transfer To: </Typography.Title>
    <Image src={"/bank.svg"} width={30} height={30} />
    <Typography.Title level={4}>1312341341231234 a/n Crystal</Typography.Title>
  </Card>
    </Row>
  )
}

export default ContentAboutMe
