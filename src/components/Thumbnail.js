import React from 'react';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

import { Avatar, Row, Col, Tag, Typography } from 'antd';

const { Title } = Typography;
const Thumbnail = () => (
  <>
    <Row justify="center" style={{ marginTop: 20 }}>
      <Col>
        <Avatar size={128} src={require('../assets/gabriel.jpeg')} />
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: 20 }}>
      <Title style={{ color: '#E9ECEC' }} level={4}>
        Gabriel Vidal Gondim
      </Title>
    </Row>
    <Row justify="center">
      <Tag icon={<MailOutlined />} color="#3b5999">
        gabrielvidalgondim@gmail.com
      </Tag>
    </Row>
    <Row justify="center" style={{ marginTop: 5 }}>
      <Tag icon={<PhoneOutlined />} color="#3b5999">
        +55-085-999583690
      </Tag>
    </Row>
  </>
);

export default Thumbnail;
