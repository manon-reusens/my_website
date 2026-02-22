import React, { useEffect } from 'react';
import { Card, Tag, Row, Col, Typography, Space, Divider, Button } from 'antd';
import { websiteConfig } from '../data/config';
import { TalksAPI } from '../data/talks';
import { formatDate } from '../utils/helpers';
import './Talks.css';
import './Blog.css';
import './BlogEnhancements.css';
import { useLocation } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const Talks: React.FC = () => {
  const { personal, keynote } = websiteConfig;
  const groupedByYear = TalksAPI.groupByYear({ excludeIds: ['custom-topics'] });
  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));
  
  const location = useLocation();
    // ...your existing code that computes groupedByYear & years

    useEffect(() => {
      if (!location.hash) return;
      // Remove leading "#"
      const targetId = location.hash.slice(1);
      const headerOffset = 88;
      // Give the DOM a tick to render the list (especially on slow devices)
      const t = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.classList.add('talk-highlight');
          // remove the highlight after a moment
          setTimeout(() => el.classList.remove('talk-highlight'), 1400);
        }
      }, 0);

      return () => clearTimeout(t);
    }, [location.hash]);


  return (
    <Space orientation="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      <Space orientation="vertical" size="small">
        <Title level={2}>Talks & Presentations</Title>
        <Paragraph type="secondary">Keynotes, invited talks, and conference presentations</Paragraph>
      </Space>

       {/* Keynote Section */}
      {keynote.enabled && (
        <Card className="blog-card featured-keynote-card">
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Title level={2}>{keynote.headline}</Title>
            <Paragraph>{keynote.description}</Paragraph>
            <Row gutter={[16, 16]}>
              {keynote.topics.map((topic, idx) => (
                <Col key={idx} xs={24} sm={12} lg={6}>
                  <Card className='keynote-card' size="small" hoverable>
                    <Space orientation="vertical" size="small" style={{ width: '100%', textAlign: 'center' }}>
                      <Text style={{ fontSize: '2em' }}>{topic.icon}</Text>
                      <Title level={5} style={{ margin: 0 }}>{topic.title}</Title>
                      <Text type="secondary">{topic.audience}</Text>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="keynote-cta">
              <Button type="primary" size="large" href={`mailto:${personal.contact.email}`}>
              {keynote.contactButtonText}
              </Button>
            </div>
          </Space>
        </Card>
      )}
      <Divider />
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Title level={2}>Past Talks</Title>
        </Space>

      {years.map((year) => (
        <Space key={year} orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Divider>
            <Title level={3} style={{ margin: 0 }}>{year}</Title>
          </Divider>
          <Row gutter={[16, 16]}>
            {groupedByYear[year].map((talk) => (
              <Col key={talk.id} xs={24} lg={12}>
                <Card id={talk.id} className="talk-card" hoverable>
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <Space>
                      <Tag className={talk.type === 'Keynote' || talk.type === 'Invited Talk' ? 'tag tag-secondary' : 'tag tag-primary'}>{talk.type}</Tag>
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
