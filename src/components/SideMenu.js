import React, { useState } from 'react';
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
import { Layout, Menu } from 'antd';

import Thumbnail from './Thumbnail';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={250}
    >
      <Thumbnail />
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
  );
};

export default SideMenu;
