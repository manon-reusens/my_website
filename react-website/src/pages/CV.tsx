import React from 'react';
import { Card, Row, Col, Typography, Space, Avatar, Divider } from 'antd';
import { MailOutlined, LinkedinOutlined, GithubOutlined, GoogleOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { websiteConfig } from '../data/config';
import { publicationsData, PublicationsAPI } from '../data/publications';
import { TalksAPI } from '../data/talks';
import { TeachingAPI } from '../data/teaching';

const { Title, Text, Paragraph } = Typography;

const CV: React.FC = () => {
  const { personal } = websiteConfig;
  const thesis = publicationsData.find(p => p.type === 'thesis');
  const featuredPubs = PublicationsAPI.getFeatured().length > 0
    ? PublicationsAPI.getFeatured()
    : PublicationsAPI.getRecent(5);
  const recentTalks = TalksAPI.getRecent(5, { excludeIds: ['custom-topics'] });
  const { current: currentTeaching, guestLectures } = TeachingAPI.getAll();

  const contactIcons = [
    { href: `mailto:${personal.contact.email}`, icon: <MailOutlined />, label: 'Email' },
    { href: personal.contact.linkedin, icon: <LinkedinOutlined />, label: 'LinkedIn' },
    { href: personal.contact.scholar, icon: <GoogleOutlined />, label: 'Scholar' },
    { href: personal.contact.github, icon: <GithubOutlined />, label: 'GitHub' },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      <Title level={2}>Curriculum Vitae</Title>

      <Row gutter={[24, 24]}>
        {/* Sidebar */}
        <Col xs={24} md={8}>
          <Card>
            <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
              <Avatar size={120} src={`/${personal.profileImage}`} alt={personal.name} />
              <div>
                <Title level={4} style={{ margin: 0 }}>{personal.name}</Title>
                <Text type="secondary">{personal.title}</Text>
              </div>

              <Divider />

              <div style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Contact</Text>
                <Space size="middle" style={{ marginTop: 8, marginBottom: 8 }}>
                  {contactIcons.map((contact, idx) => (
                    <a
                      key={idx}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={contact.label}
                      style={{ fontSize: '1.5em' }}
                    >
                      {contact.icon}
                    </a>
                  ))}
                </Space>
                <Paragraph>
                  <Text>{personal.contact.email}</Text><br />
                  <Text type="secondary"><EnvironmentOutlined /> {personal.contact.location}</Text>
                </Paragraph>
              </div>

              <Divider />

              <div style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Research Focus</Text>
                <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                  {personal.researchFocus.map((item, idx) => (
                    <li key={idx}><Text>{item}</Text></li>
                  ))}
                </ul>
              </div>

              <Divider />

              <div style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Technical Skills</Text>
                <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                  {personal.technicalSkills.map((skill, idx) => (
                    <li key={idx}><Text>{skill}</Text></li>
                  ))}
                </ul>
              </div>

              <Divider />

              <div style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Languages</Text>
                <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                  {personal.languages.map((lang, idx) => (
                    <li key={idx}><Text>{lang.language} — {lang.level}</Text></li>
                  ))}
                </ul>
              </div>
            </Space>
          </Card>
        </Col>

        {/* Main Content */}
        <Col xs={24} md={16}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            {/* Education */}
            <Card>
              <Title level={4}>Education</Title>
              {thesis && (
                <div>
                  <Text strong>PhD in Business Economics — {thesis.venue}</Text><br />
                  <Text type="secondary">{new Date(thesis.date).getFullYear()}</Text><br />
                  <Text>{thesis.title}</Text><br />
                  {thesis.promotors && (
                    <Text type="secondary" italic>(Co-)Supervisors: {thesis.promotors}</Text>
                  )}
                </div>
              )}
            </Card>

            {/* Positions */}
            <Card>
              <Title level={4}>Positions</Title>
              <Space direction="vertical" size="small">
                {personal.positions.map((pos, idx) => (
                  <Text key={idx} strong>{pos.title}</Text>
                ))}
              </Space>
            </Card>

            {/* Selected Publications */}
            <Card>
              <Title level={4}>Selected Publications</Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {featuredPubs.map((pub) => (
                  <div key={pub.id}>
                    <Text strong>{pub.title}</Text><br />
                    <Text type="secondary">{pub.authors.join(', ')} — {pub.venue} ({pub.year})</Text>
                  </div>
                ))}
              </Space>
            </Card>

            {/* Talks */}
            <Card>
              <Title level={4}>Talks (Recent)</Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {recentTalks.map((talk) => (
                  <div key={talk.id}>
                    <Text strong>{talk.title}</Text><br />
                    <Text type="secondary">
                      {talk.type} — {talk.event} —{' '}
                      {new Date(talk.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </Text>
                  </div>
                ))}
              </Space>
            </Card>

            {/* Teaching */}
            <Card>
              <Title level={4}>Teaching</Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {currentTeaching.map((teaching) => (
                  <div key={teaching.id}>
                    <Text strong>{teaching.role} — {teaching.course}</Text><br />
                    <Text type="secondary">
                      {teaching.institution} — {teaching.startYear}–{teaching.endYear || 'present'}
                    </Text>
                  </div>
                ))}
                {guestLectures.slice(0, 3).map((lecture) => (
                  <div key={lecture.id}>
                    <Text strong>Guest Lecture — {lecture.course}</Text><br />
                    <Text type="secondary">{lecture.institution} — {lecture.year}</Text>
                  </div>
                ))}
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default CV;
