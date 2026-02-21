import React from 'react';
import { Layout as AntLayout } from 'antd';
import './Footer.css';

const { Footer: AntFooter } = AntLayout;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} Manon Reusens</p>
      </div>
    </AntFooter>
  );
};

export default Footer;
