import React from 'react';
import { Layout as AntLayout, Typography } from 'antd';

const { Footer: AntFooter } = AntLayout;
const { Text } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter style={{ textAlign: 'center', padding: '24px 50px' }}>
      <Text type="secondary">&copy; {currentYear} Manon Reusens</Text>
    </AntFooter>
  );
};

export default Footer;
