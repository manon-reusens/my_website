import React from 'react';
import { Layout as AntLayout } from 'antd';
import Navigation from './Navigation';
import Footer from './Footer';
import './MainLayout.css';

const { Content } = AntLayout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <AntLayout className="main-layout">
      <div className="grain" aria-hidden="true" />
      <Navigation />
      <Content className="main-content">
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default MainLayout;
