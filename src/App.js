import { Layout, Typography, Divider, Space } from 'antd';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

import Sidemenu from './components/SideMenu';
const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidemenu />
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <img
              src={require('./assets/code2.jpg')}
              alt="GABRIEL"
              style={{
                border: '1px solid #ddd',
                borderRadius: 10,
                padding: 2,
                width: 1150,
              }}
            />
            <Divider />
            <Space size="middle" direction="vertical">
              <Title strong level={3}>
                About me
              </Title>
              <Title level={4} type="secondary">
                Who am I?
              </Title>
              <Text>
                I'm a Computer Science student from Universidade de Fortaleza
                that work as a full stack developer. I'm a developer since july
                2018. I love exploring new technologies that could help me
                during my daily life. I have a special love for some UX/UI
                principles and bots.
              </Text>
            </Space>
            <Divider />
            <Space direction="vertical" style={{ marginTop: 20 }}>
              <Title strong level={3}>
                What I do?
              </Title>
              <Title strong level={4} type="secondary">
                Here are some of my expertises
              </Title>
              <Rate
                defaultValue={5}
                disabled
                character={({ index }) => {
                  return customIcons[index + 1];
                }}
              />
              <Text>Javascript</Text>
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
