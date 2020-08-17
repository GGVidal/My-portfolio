import {
  Layout,
  Menu,
  Avatar,
  Row,
  Col,
  Tag,
  Typography,
  Divider,
  Space,
} from 'antd';
import {
  DesktopOutlined,
  OrderedListOutlined,
  FileOutlined,
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={250}
      >
        <Row justify="center" style={{ marginTop: 20 }}>
          <Col>
            <Avatar size={128} src={require('../src/assets/gabriel.jpeg')} />
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
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<OrderedListOutlined />}>
            Timeline
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            About
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />} />
          <SubMenu key="sub1" icon={<UserOutlined />} title="Social Medias">
            <Menu.Item key="2" icon={<LinkedinOutlined />}>
              <a href="https://www.linkedin.com/in/gabriel-gondim-584477157/">
                LinkedIn
              </a>
            </Menu.Item>
            <Menu.Item key="3" icon={<GithubOutlined />}>
              <a href="https://github.com/GGVidal">Github</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <img
              src={require('./assets/code2.jpg')}
              style={{
                border: '1px solid #ddd',
                borderRadius: 4,
                padding: 2,
                width: 1650,
              }}
            />
            <Divider />
            <Space size="middle" direction="vertical">
              <Title type="secondary" level={4} style={{ fontSize: 18 }}>
                About me
              </Title>
              <Title strong level={3}>Who am I?</Title>
              <Text>
                I'm a Computer Science student from Universidade de Fortaleza
                that work as a full stack developer. I'm a developer since july
                2018. I love exploring new technologies that could help me
                during my daily life. I have a special love for some UX/UI
                principles and bots.
              </Text>
            </Space>
            <Space direction="vertical" style={{ marginTop: 80 }}>
              <Title type="secondary" level={4} style={{ fontSize: 18 }}>
                What I do?
              </Title>
              <Title strong level={3}>Here are some of my expertises</Title>
            </Space>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
