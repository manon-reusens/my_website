import React from 'react';
import { Layout as AntLayout } from 'antd';
import Navigation from './Navigation';
import Footer from './Footer';

const { Content } = AntLayout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Content style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px'
      }}>
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default MainLayout;
