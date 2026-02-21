import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Tag, Row, Col } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { websiteConfig } from '../data/config';
import { PublicationsAPI } from '../data/publications';
import { NewsGenerator } from '../data/news';
import './Home.css';

const Home: React.FC = () => {
  const { personal, keynote } = websiteConfig;
  const featuredPubs = PublicationsAPI.getFeatured().slice(0, 3);
  const news = NewsGenerator.getRecent(4, { excludeTalkIds: ['custom-topics'] });

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="container hero-section">
        <div className="fade-in-up">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} sm={24} md={8} lg={6}>
              <img
                className="profile-image stagger-1"
                src={`/${personal.profileImage}`}
                alt={`Portrait of ${personal.name}`}
              />
            </Col>
            <Col xs={24} sm={24} md={16} lg={18}>
              <div className="stagger-2">
                <h1 className="gradient-text">{personal.name}</h1>
                <p className="hero-tagline">{personal.tagline}</p>
                <div className="hero-positions">
                  {personal.positions.map((pos, idx) => (
                    <Tag key={idx} color="green">{pos.title}</Tag>
                  ))}
                </div>
                <div className="hero-actions">
                  <Button
                    type="primary"
                    size="large"
                    icon={<MailOutlined />}
                    href={`mailto:${personal.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </Button>
                  <Link to="/cv">
                    <Button size="large">View CV</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </header>

      {/* News Section */}
      <main className="container">
        <section className="fade-in-up stagger-2 news-section">
          <div className="section-header">
            <h2>Latest News</h2>
          </div>
          <Row gutter={[16, 16]}>
            {news.map((item) => (
              <Col key={item.id} xs={24} sm={12} lg={6}>
                <Card className="news-card" hoverable>
                  <div className="news-date">{item.date}</div>
                  <h4>{item.title}</h4>
                  <p className="news-description">{item.description}</p>
                  {item.link && (
                    item.type === 'publication' ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Read more →
                      </a>
                    ) : (
                      <Link to={item.link}>Read more →</Link>
                    )
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Featured Publications */}
        <section className="fade-in-up stagger-3 publications-section">
          <div className="section-header">
            <h2>Featured Publications</h2>
            <p>Highlights selected from recent work.</p>
          </div>
          <Row gutter={[16, 16]}>
            {featuredPubs.map((pub) => (
              <Col key={pub.id} xs={24} md={12} lg={8}>
                <Card className="publication-card" hoverable>
                  <Tag color="green" className="pub-tag">
                    {pub.venueType} — {pub.year}
                  </Tag>
                  <h3>{pub.title}</h3>
                  <p className="pub-authors">{pub.authors.join(', ')}</p>
                  <p>{pub.description}</p>
                  <div className="pub-tags">
                    {pub.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="pub-links">
                    {pub.links.paper && (
                      <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                        <Button>Paper</Button>
                      </a>
                    )}
                    {pub.links.arxiv && (
                      <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer">
                        <Button>arXiv</Button>
                      </a>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/publications">
              <Button size="large">See all publications</Button>
            </Link>
          </div>
        </section>

        {/* Keynote Section */}
        {keynote.enabled && (
          <section className="fade-in-up stagger-4 keynote-section">
            <Card className="keynote-card secondary-accent">
              <div className="section-header">
                <h2>{keynote.headline}</h2>
              </div>
              <p>{keynote.description}</p>
              <Row gutter={[16, 16]} style={{ marginTop: '1.5rem' }}>
                {keynote.topics.map((topic, idx) => (
                  <Col key={idx} xs={24} sm={12} lg={6}>
                    <div className="keynote-topic">
                      <div className="topic-icon">{topic.icon}</div>
                      <h4>{topic.title}</h4>
                      <p className="topic-audience">{topic.audience}</p>
                    </div>
                  </Col>
                ))}
              </Row>
              <div style={{ marginTop: '1.5rem' }}>
                <Button
                  type="primary"
                  size="large"
                  href={`mailto:${personal.contact.email}`}
                >
                  {keynote.contactButtonText}
                </Button>
              </div>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
