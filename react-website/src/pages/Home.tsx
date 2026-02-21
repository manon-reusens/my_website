import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Tag, Row, Col, Typography, Space, Avatar } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { websiteConfig } from '../data/config';
import { PublicationsAPI } from '../data/publications';
import { NewsGenerator } from '../data/news';
import './Home.css';

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const { personal, keynote } = websiteConfig;
  const featuredPubs = PublicationsAPI.getFeatured().slice(0, 3);
  const news = NewsGenerator.getRecent(4, { excludeTalkIds: ['custom-topics'] });

  return (
    <Space orientation="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      {/* Hero Section */}
      <Row gutter={[48, 32]} align="middle">
        <Col xs={24} sm={24} md={8} lg={6} style={{ textAlign: 'center' }}>
          <Avatar
            size={180}
            src={`/${personal.profileImage}`}
            alt={`Portrait of ${personal.name}`}
          />
        </Col>
        <Col xs={24} sm={24} md={16} lg={18}>
          <Space orientation="vertical" size="middle">
            <Title level={1} style={{
              margin: 0,
              background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}>
              {personal.name}
            </Title>
            <Title level={3} type="secondary" style={{ margin: 0, fontWeight: 400 }}>
              {personal.tagline}
            </Title>
            <Space wrap>
              {personal.positions.map((pos, idx) => (
                <Tag key={idx} className="tag tag-primary">{pos.title}</Tag>
              ))}
            </Space>
            <Space>
              <Button type="primary" size="medium" icon={<MailOutlined />} href={`mailto:${personal.contact.email}`}>
                Contact
              </Button>
              <Link to="/cv">
                <Button size="medium">View CV</Button>
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>

      {/* News Section */}
      <div className="news-section">
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Title level={2}>Latest News</Title>
          <Row gutter={[24, 24]} justify="center">
            {news.map((item) => (
              <Col key={item.id} xs={24} sm={12} lg={6}>
                <Card className='news-card' size="small" hoverable>
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <Tag className="tag tag-secondary">{item.date}</Tag>
                    <Title level={5} style={{ margin: 0 }}>{item.title}</Title>
                    <Paragraph type="secondary" ellipsis={{ rows: 3 }} style={{ margin: 0 }}>
                      {item.description}
                    </Paragraph>
                    {item.link && (
                      item.type === 'publication' ? (
                        <Typography.Link href={item.link} target="_blank">Read more →</Typography.Link>
                      ) : (
                        <Link to={item.link}>Read more →</Link>
                      )
                    )}
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      </div>

      {/* Featured Publications */}
      <div className="publications-section">
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Space orientation="vertical" size="small">
            <Title level={2}>Featured Publications</Title>
            <Paragraph type="secondary">Highlights selected from recent work.</Paragraph>
          </Space>
          <Row gutter={[24, 24]} justify="center">
            {featuredPubs.map((pub) => (
              <Col key={pub.id} xs={24} md={12} lg={8}>
                <Card className='publication-card' size="small" hoverable>
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <Tag className="tag tag-secondary">{pub.venueType} — {pub.year}</Tag>
                    <Title level={5} style={{ margin: 0 }}>{pub.title}</Title>
                    <Text type="secondary" style={{ fontSize: '0.9em' }}>{pub.authors.join(', ')}</Text>
                    <Paragraph ellipsis={{ rows: 3 }} style={{ margin: '8px 0' }}>{pub.description}</Paragraph>
                    <Space wrap size="small">
                      {pub.tags.map((tag) => (
                        <Tag key={tag} color="default">{tag}</Tag>
                      ))}
                    </Space>
                    <Space wrap>
                      {pub.links.paper && (
                        <Button type="primary" size="small" href={pub.links.paper} target="_blank">Paper</Button>
                      )}
                      {pub.links.arxiv && (
                        <Button type="primary" size="small" href={pub.links.arxiv} target="_blank">arXiv</Button>
                      )}
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
          <Link to="/publications">
            <Button className="btn btn-secondary" size="large">See all publications</Button>
          </Link>
        </Space>
      </div>

      {/* Keynote Section */}
      {keynote.enabled && (
        <Card className='keynote-card'>
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
            <Button type="primary" size="large" href={`mailto:${personal.contact.email}`}>
              {keynote.contactButtonText}
            </Button>
          </Space>
        </Card>
      )}
    </Space>
  );
};

export default Home;
