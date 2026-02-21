import React, { useState } from 'react';
import {  Card, Button, Tag, Row, Col, Statistic } from 'antd';
import { PublicationsAPI, publicationsData } from '../data/publications';
import './Publications.css';

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
    <div className="publications-page container">
      <section className="section-header">
        <h2>Publications</h2>
        <p>Research at the intersection of Responsible AI, bias mitigation, and practical LLM applications</p>
        
        <Row gutter={[32, 16]} justify="center" style={{ marginTop: '1.5rem' }}>
          <Col>
            <Statistic
              title="Publications"
              value={stats.total}
              valueStyle={{ color: 'var(--color-accent-primary)', fontWeight: 700 }}
            />
          </Col>
          <Col>
            <Statistic
              title="Conference Papers"
              value={stats.conferences}
              valueStyle={{ color: 'var(--color-accent-primary)', fontWeight: 700 }}
            />
          </Col>
          <Col>
            <Statistic
              title="Journal Articles"
              value={stats.journals}
              valueStyle={{ color: 'var(--color-accent-primary)', fontWeight: 700 }}
            />
          </Col>
        </Row>
      </section>

      <Card className="filter-card">
        <div className="filter-buttons">
          {filters.map((f) => (
            <Button
              key={f.key}
              type={filter === f.key ? 'primary' : 'default'}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </div>
      </Card>

      <Row gutter={[16, 16]} className="publications-grid">
        {filteredPubs.map((pub) => (
          <Col key={pub.id} xs={24} md={12} lg={8}>
            <Card className="publication-card" hoverable>
              <Tag color="green">{pub.venueType} — {pub.year}</Tag>
              <h3>{pub.title}</h3>
              <p className="pub-authors">{pub.authors.join(', ')}</p>
              <p>{pub.description}</p>
              
              {pub.tags.length > 0 && (
                <>
                  <div className="tag-label">Tags</div>
                  <div className="publication-tags">
                    {pub.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </>
              )}
              
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
    </div>
  );
};

export default Publications;
