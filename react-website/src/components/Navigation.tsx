import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout as AntLayout, Button, Drawer } from 'antd';
import {  MenuOutlined, CloseOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from '../hooks/useTheme';
import './Navigation.css';

const { Header } = AntLayout;

interface NavigationProps {
  logoSrc?: string;
}

const Navigation: React.FC<NavigationProps> = ({ logoSrc = '/MR-logo.png' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/publications', label: 'Publications' },
    { path: '/talks', label: 'Talks' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/cv', label: 'CV' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Header className="site-header">
      <div className="nav-content">
        <Link className="logo" to="/">
          <img src={logoSrc} alt="MR logo" className="logo-image" />
        </Link>

        <Button
          className="nav-toggle"
          icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        />

        <Button
          className="theme-toggle"
          icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        />

        <nav className="desktop-nav">
          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={isActive(item.path) ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Drawer
          placement="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="mobile-drawer"
        >
          <nav>
            <ul className="mobile-nav-links">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={isActive(item.path) ? 'active' : ''}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Drawer>
      </div>
    </Header>
  );
};

export default Navigation;
