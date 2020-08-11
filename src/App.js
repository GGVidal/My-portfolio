import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Row,
  Col,
  Tag,
  Typography,
} from 'antd';
import {
  DesktopOutlined,
  OrderedListOutlined,
  FileOutlined,
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

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
          <Tag icon={<MailOutlined />} color="#1B1558">
            gabrielvidalgondim@gmail.com
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
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Carousel>
              <div>
                <img src={require('../src/assets/gabriel.jpeg')} />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={require('../src/assets/gabriel.jpeg')} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={require('../src/assets/gabriel.jpeg')} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
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
