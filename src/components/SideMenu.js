import React, { useState } from 'react';
import { Layout } from 'antd';

import Thumbnail from './Thumbnail';
import Menu from './Menu';
const { Sider } = Layout;

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
      <Menu />
    </Sider>
  );
};

export default SideMenu;
