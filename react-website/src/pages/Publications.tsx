import React, { useState } from 'react';
import { Card, Button, Tag, Row, Col, Statistic, Typography, Space } from 'antd';
import { PublicationsAPI, publicationsData } from '../data/publications';

const { Title, Paragraph, Text } = Typography;

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const stats = {
    total: publicationsData.length,
    journals: publicationsData.filter(p => p.type === 'journal').length,
    conferences: publicationsData.filter(p => p.type === 'conference').length,
  };

  const filteredPubs = filter === 'all'
    ? PublicationsAPI.getSortedByDate()
    : PublicationsAPI.getSortedByDate().filter(p => p.type === filter);

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'journal', label: 'Journal' },
    { key: 'conference', label: 'Conference' },
    { key: 'preprint', label: 'Preprint' },
    { key: 'thesis', label: 'Thesis' },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
        <Title level={2}>Publications</Title>
        <Paragraph type="secondary">
          Research at the intersection of Responsible AI, bias mitigation, and practical LLM applications
        </Paragraph>
        
        <Row gutter={[32, 16]} justify="center" style={{ marginTop: 24 }}>
          <Col>
            <Statistic title="Publications" value={stats.total} />
          </Col>
          <Col>
            <Statistic title="Conference Papers" value={stats.conferences} />
          </Col>
          <Col>
            <Statistic title="Journal Articles" value={stats.journals} />
          </Col>
        </Row>
      </Space>

      <Card>
        <Space wrap size="middle">
          {filters.map((f) => (
            <Button
              key={f.key}
              type={filter === f.key ? 'primary' : 'default'}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </Space>
      </Card>

      <Row gutter={[16, 16]}>
        {filteredPubs.map((pub) => (
          <Col key={pub.id} xs={24} md={12} lg={8}>
            <Card hoverable>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Tag color="green">{pub.venueType} — {pub.year}</Tag>
                <Title level={5} style={{ margin: 0 }}>{pub.title}</Title>
                <Text type="secondary" style={{ fontSize: '0.9em' }}>{pub.authors.join(', ')}</Text>
                <Paragraph>{pub.description}</Paragraph>
                
                {pub.tags.length > 0 && (
                  <>
                    <Text type="secondary" strong style={{ fontSize: '0.85em' }}>Tags</Text>
                    <Space wrap size="small">
                      {pub.tags.map((tag) => (
                        <Tag key={tag} color="default">{tag}</Tag>
                      ))}
                    </Space>
                  </>
                )}
                
                <Space wrap>
                  {pub.links.paper && (
                    <Button size="small" href={pub.links.paper} target="_blank">Paper</Button>
                  )}
                  {pub.links.arxiv && (
                    <Button size="small" href={pub.links.arxiv} target="_blank">arXiv</Button>
                  )}
                  {pub.links.code && (
                    <Button size="small" href={pub.links.code} target="_blank">Code</Button>
                  )}
                  {pub.links.slides && (
                    <Button size="small" href={pub.links.slides} target="_blank">Slides</Button>
                  )}
                </Space>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default Publications;
