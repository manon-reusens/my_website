import React from 'react';
import { Card, Tag, Row, Col, Typography, Space, Divider } from 'antd';
import { TalksAPI } from '../data/talks';
import { formatDate } from '../utils/helpers';

const { Title, Paragraph, Text } = Typography;

const Talks: React.FC = () => {
  const groupedByYear = TalksAPI.groupByYear({ excludeIds: ['custom-topics'] });
  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      <Space direction="vertical" size="small">
        <Title level={2}>Talks & Presentations</Title>
        <Paragraph type="secondary">Keynotes, invited talks, and conference presentations</Paragraph>
      </Space>

      {years.map((year) => (
        <Space key={year} direction="vertical" size="middle" style={{ width: '100%' }}>
          <Divider>
            <Title level={3} style={{ margin: 0 }}>{year}</Title>
          </Divider>
          <Row gutter={[16, 16]}>
            {groupedByYear[year].map((talk) => (
              <Col key={talk.id} xs={24} lg={12}>
                <Card hoverable>
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Space>
                      <Tag color={talk.type === 'Keynote' ? 'orange' : 'green'}>{talk.type}</Tag>
                      <Text type="secondary">{formatDate(talk.date, true)}</Text>
                    </Space>
                    <Title level={5} style={{ margin: 0 }}>{talk.title}</Title>
                    <Text strong>{talk.event}</Text>
                    <Text type="secondary">{talk.location}</Text>
                    {talk.duration && (
                      <Text type="secondary">Duration: {talk.duration}</Text>
                    )}
                    <Paragraph>{talk.description}</Paragraph>
                    
                    {talk.moreInfo && (
                      <Paragraph type="secondary" style={{ fontStyle: 'italic' }}>{talk.moreInfo}</Paragraph>
                    )}
                    
                    {talk.keywords && talk.keywords.length > 0 && (
                      <Space wrap size="small">
                        {talk.keywords.map((keyword) => (
                          <Tag key={keyword} color="default">{keyword}</Tag>
                        ))}
                      </Space>
                    )}
                    
                    <Space wrap>
                      {talk.links.event && (
                        <Typography.Link href={talk.links.event} target="_blank">Event →</Typography.Link>
                      )}
                      {talk.links.slides && (
                        <Typography.Link href={talk.links.slides} target="_blank">Slides →</Typography.Link>
                      )}
                      {talk.links.abstract && (
                        <Typography.Link href={talk.links.abstract} target="_blank">Abstract →</Typography.Link>
                      )}
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      ))}
    </Space>
  );
};

export default Talks;
