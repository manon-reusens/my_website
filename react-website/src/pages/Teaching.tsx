import React from 'react';
import { Card, Tag, Row, Col, Typography, Space, Divider } from 'antd';
import { TeachingAPI } from '../data/teaching';
import './Teaching.css';

const { Title, Paragraph, Text } = Typography;

const Teaching: React.FC = () => {
  const { current, guestLectures, assistantships } = TeachingAPI.getAll();

  return (
    <Space orientation="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      <Space orientation="vertical" size="small">
        <Title level={2}>Teaching</Title>
        <Paragraph type="secondary">Courses, guest lectures, and teaching assistantships</Paragraph>
      </Space>

      {/* Current Teaching */}
      {current.length > 0 && (
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Divider>
            <Title level={3} style={{ margin: 0 }}>Current Teaching</Title>
          </Divider>
          <Row gutter={[16, 16]}>
            {current.map((teaching) => (
              <Col key={teaching.id} xs={24}>
                <Card className='teaching-card' hoverable>
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <Space wrap>
                      <Tag className='tag tag-primary'>{teaching.role}</Tag>
                      <Tag color="default">{teaching.level}</Tag>
                      <Text type="secondary">
                        {teaching.startYear}–{teaching.endYear || 'present'}
                      </Text>
                    </Space>
                    <Title level={4} style={{ margin: 0 }}>{teaching.course}</Title>
                    <Tag>{teaching.institution}</Tag>
                    <Text type="secondary">
                      {teaching.ects && `${teaching.ects} ECTS`}
                      {teaching.students && ` • ${teaching.students} students`}
                    </Text>
                    <Paragraph>{teaching.description}</Paragraph>
                    
                    {teaching.responsibilities && teaching.responsibilities.length > 0 && (
                      <div>
                        <Text strong>Responsibilities:</Text>
                        <ul style={{ marginTop: 8, marginLeft: 20 }}>
                          {teaching.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Space wrap size="small">
                      {teaching.tags.map((tag) => (
                        <Tag key={tag} color="default">{tag}</Tag>
                      ))}
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      )}

      {/* Guest Lectures */}
      {guestLectures.length > 0 && (
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Divider>
            <Title level={3} style={{ margin: 0 }}>Guest Lectures</Title>
          </Divider>
          <Row gutter={[16, 16]}>
            {guestLectures.map((lecture) => (
              <Col key={lecture.id} xs={24} md={12}>
                <Card className='teaching-card' size="small" hoverable>
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <Space>
                      <Tag className='tag tag-secondary'>Guest Lecture</Tag>
                      <Text type="secondary">{lecture.year}</Text>
                    </Space>
                    <Title level={5} style={{ margin: 0 }}>{lecture.course}</Title>
                    {lecture.parentCourse && (
                      <Text type="secondary">Part of: {lecture.parentCourse}</Text>
                    )}
                    <Text>{lecture.institution}</Text>
                    <Text type="secondary">
                      {lecture.ects && `${lecture.ects} ECTS`} • {lecture.level}
                    </Text>
                    <Paragraph>{lecture.description}</Paragraph>
                    
                    <Space wrap size="small">
                      {lecture.tags.map((tag) => (
                        <Tag key={tag} color="default">{tag}</Tag>
                      ))}
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      )}

      {/* Teaching Assistantships */}
      {assistantships.length > 0 && (
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Divider>
            <Title level={3} style={{ margin: 0 }}>Teaching Assistantships</Title>
          </Divider>
          <Row gutter={[16, 16]}>
            {assistantships.map((assistant) => (
              <Col key={assistant.id} xs={24} md={12}>
                <Card className='teaching-card' size="small" hoverable>
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <Space>
                      <Tag className='tag tag-tertiary'>Teaching Assistant</Tag>
                      <Text type="secondary">
                        {assistant.startYear}–{assistant.endYear}
                      </Text>
                    </Space>
                    <Title level={5} style={{ margin: 0 }}>{assistant.course}</Title>
                    <Text>{assistant.institution}</Text>
                    <Paragraph>{assistant.description}</Paragraph>
                    
                    <Space wrap size="small">
                      {assistant.tags.map((tag) => (
                        <Tag key={tag} color="default">{tag}</Tag>
                      ))}
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      )}
    </Space>
  );
};

export default Teaching;
