import React from 'react';
import { Card, Tag, Row, Col } from 'antd';
import { TalksAPI } from '../data/talks';
import { formatDate } from '../utils/helpers';
import './Talks.css';

const Talks: React.FC = () => {
  const groupedByYear = TalksAPI.groupByYear({ excludeIds: ['custom-topics'] });
  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="talks-page container">
      <section className="section-header">
        <h2>Talks & Presentations</h2>
        <p>Keynotes, invited talks, and conference presentations</p>
      </section>

      {years.map((year) => (
        <div key={year} className="year-section">
          <h3 className="year-header">{year}</h3>
          <Row gutter={[16, 16]}>
            {groupedByYear[year].map((talk) => (
              <Col key={talk.id} xs={24} lg={12}>
                <Card className="talk-card" hoverable>
                  <div className="talk-header">
                    <Tag color={talk.type === 'Keynote' ? 'orange' : 'green'}>
                      {talk.type}
                    </Tag>
                    <span className="talk-date">{formatDate(talk.date, true)}</span>
                  </div>
                  <h3>{talk.title}</h3>
                  <p className="talk-event">
                    <strong>{talk.event}</strong> • {talk.location}
                  </p>
                  {talk.duration && (
                    <p className="talk-duration">Duration: {talk.duration}</p>
                  )}
                  <p>{talk.description}</p>
                  
                  {talk.moreInfo && (
                    <p className="talk-more-info">{talk.moreInfo}</p>
                  )}
                  
                  {talk.keywords && talk.keywords.length > 0 && (
                    <div className="talk-keywords">
                      {talk.keywords.map((keyword) => (
                        <Tag key={keyword}>{keyword}</Tag>
                      ))}
                    </div>
                  )}
                  
                  {(talk.links.event || talk.links.slides || talk.links.abstract) && (
                    <div className="talk-links">
                      {talk.links.event && (
                        <a href={talk.links.event} target="_blank" rel="noopener noreferrer">
                          Event →
                        </a>
                      )}
                      {talk.links.slides && (
                        <a href={talk.links.slides} target="_blank" rel="noopener noreferrer">
                          Slides →
                        </a>
                      )}
                      {talk.links.abstract && (
                        <a href={talk.links.abstract} target="_blank" rel="noopener noreferrer">
                          Abstract →
                        </a>
                      )}
                    </div>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Talks;
