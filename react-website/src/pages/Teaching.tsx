import React from 'react';
import { Card, Tag, Row, Col } from 'antd';
import { TeachingAPI } from '../data/teaching';
import './Teaching.css';

const Teaching: React.FC = () => {
  const { current, guestLectures, assistantships } = TeachingAPI.getAll();

  return (
    <div className="teaching-page container">
      <section className="section-header">
        <h2>Teaching</h2>
        <p>Courses, guest lectures, and teaching assistantships</p>
      </section>

      {/* Current Teaching */}
      {current.length > 0 && (
        <div className="teaching-section">
          <h3 className="section-title">Current Teaching</h3>
          <Row gutter={[16, 16]}>
            {current.map((teaching) => (
              <Col key={teaching.id} xs={24}>
                <Card className="teaching-card">
                  <div className="teaching-header">
                    <div>
                      <Tag color="green">{teaching.role}</Tag>
                      <Tag>{teaching.level}</Tag>
                    </div>
                    <span className="teaching-year">
                      {teaching.startYear}–{teaching.endYear || 'present'}
                    </span>
                  </div>
                  <h3>{teaching.course}</h3>
                  <p className="teaching-institution">{teaching.institution}</p>
                  <p className="teaching-meta">
                    {teaching.ects && `${teaching.ects} ECTS`}
                    {teaching.students && ` • ${teaching.students} students`}
                  </p>
                  <p>{teaching.description}</p>
                  
                  {teaching.responsibilities && teaching.responsibilities.length > 0 && (
                    <div className="teaching-responsibilities">
                      <h4>Responsibilities:</h4>
                      <ul>
                        {teaching.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="teaching-tags">
                    {teaching.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Guest Lectures */}
      {guestLectures.length > 0 && (
        <div className="teaching-section">
          <h3 className="section-title">Guest Lectures</h3>
          <Row gutter={[16, 16]}>
            {guestLectures.map((lecture) => (
              <Col key={lecture.id} xs={24} md={12}>
                <Card className="teaching-card">
                  <div className="teaching-header">
                    <Tag color="orange">Guest Lecture</Tag>
                    <span className="teaching-year">{lecture.year}</span>
                  </div>
                  <h3>{lecture.course}</h3>
                  {lecture.parentCourse && (
                    <p className="parent-course">Part of: {lecture.parentCourse}</p>
                  )}
                  <p className="teaching-institution">{lecture.institution}</p>
                  <p className="teaching-meta">
                    {lecture.ects && `${lecture.ects} ECTS`} • {lecture.level}
                  </p>
                  <p>{lecture.description}</p>
                  
                  <div className="teaching-tags">
                    {lecture.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Teaching Assistantships */}
      {assistantships.length > 0 && (
        <div className="teaching-section">
          <h3 className="section-title">Teaching Assistantships</h3>
          <Row gutter={[16, 16]}>
            {assistantships.map((ta) => (
              <Col key={ta.id} xs={24}>
                <Card className="teaching-card">
                  <div className="teaching-header">
                    <Tag>Teaching Assistant</Tag>
                    <span className="teaching-year">
                      {ta.startYear}–{ta.endYear}
                    </span>
                  </div>
                  <h3>{ta.course}</h3>
                  <p className="teaching-institution">{ta.institution}</p>
                  <p className="teaching-meta">
                    {ta.ects && `${ta.ects} ECTS`}
                    {ta.students && ` • ${ta.students}`}
                    {ta.evaluation && ` • ${ta.evaluation}`}
                  </p>
                  <p>{ta.description}</p>
                  
                  {ta.responsibilities && ta.responsibilities.length > 0 && (
                    <div className="teaching-responsibilities">
                      <h4>Responsibilities:</h4>
                      <ul>
                        {ta.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="teaching-tags">
                    {ta.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Teaching;
