import React from 'react';
import {
  DesktopOutlined,
  OrderedListOutlined,
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;
const Menucomponent = () => (
  <>
    <div className="logo" />
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<OrderedListOutlined />}>
        Timeline
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        About
      </Menu.Item>
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
  </>
);

export default Menucomponent;
