import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout as AntLayout, Button, Drawer, Menu, Space, Avatar } from 'antd';
import { MenuOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from '../hooks/useTheme';

const { Header } = AntLayout;

interface NavigationProps {
  logoSrc?: string;
}

const Navigation: React.FC<NavigationProps> = ({ logoSrc = '/MR-logo.png' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const menuItems = [
    { key: '/', label: 'Home' },
    { key: '/publications', label: 'Publications' },
    { key: '/talks', label: 'Talks' },
    { key: '/teaching', label: 'Teaching' },
    { key: '/cv', label: 'CV' },
  ];

  return (
    <Header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/">
        <Avatar src={logoSrc} size={40} shape="square" alt="MR logo" />
      </Link>

      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        style={{ 
          flex: 1, 
          minWidth: 0,
          marginLeft: 24,
          borderBottom: 'none',
          display: 'none',
        }}
        className="desktop-menu"
        items={menuItems.map(item => ({
          key: item.key,
          label: <Link to={item.key}>{item.label}</Link>,
        }))}
      />
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>

      <Space>
        <Button
          type="text"
          icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
          onClick={toggleTheme}
        />
        <Button
          className="mobile-toggle"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuOpen(true)}
        />
      </Space>

      <Drawer
        placement="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        width={250}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems.map(item => ({
            key: item.key,
            label: <Link to={item.key} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>,
          }))}
        />
      </Drawer>
    </Header>
  );
};

export default Navigation;
