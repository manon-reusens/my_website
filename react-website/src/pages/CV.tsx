import React from 'react';
import { Card, Row, Col, Typography, Space, Avatar, Divider } from 'antd';
import { MailOutlined, LinkedinOutlined, GithubOutlined, EnvironmentOutlined} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { websiteConfig } from '../data/config';
import { publicationsData, PublicationsAPI } from '../data/publications';
import { TalksAPI } from '../data/talks';
import { TeachingAPI } from '../data/teaching';
import GoogleScholarSvg from '../../public/icons/GoogleScholarSvg.tsx'

const { Title, Text, Paragraph } = Typography;

const CV: React.FC = () => {
  const { personal } = websiteConfig;
  const thesis = publicationsData.find(p => p.type === 'thesis');
  const featuredPubs = PublicationsAPI.getRecent(5);
  const recentTalks = TalksAPI.getRecent(3, { excludeIds: ['custom-topics'] });
  const { current: currentTeaching, guestLectures } = TeachingAPI.getAll();
  const GoogleScholar = (props: any) => <Icon component={GoogleScholarSvg} {...props} />;

  const contactIcons = [
    { href: `mailto:${personal.contact.email}`, icon: <MailOutlined />, label: 'Email' },
    { href: personal.contact.linkedin, icon: <LinkedinOutlined />, label: 'LinkedIn' },
    { href: personal.contact.scholar, icon: <GoogleScholar />, label: 'Scholar' },
    { href: personal.contact.github, icon: <GithubOutlined />, label: 'GitHub' },
  ];

  return (
    <Space orientation="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      <Title level={2}>Curriculum Vitae</Title>

      <Row gutter={[24, 24]}>
        {/* Sidebar */}
        <Col xs={24} md={8}>
          <Card>
            <Space orientation="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
              <Avatar size={240} src={`/${personal.profileImage}`} alt={personal.name} />
              <div>
                <Title level={4} style={{ margin: 0 }}>{personal.name}</Title>
                <Text type="secondary">{personal.title}</Text>
              </div>

              <Divider />

              <Space orientation="vertical" size="middle" style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Contact</Text>
                <Space size="middle" wrap>
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
                <Paragraph style={{ margin: 0 }}>
                  <Text>{personal.contact.email}</Text><br />
                  <Text type="secondary"><EnvironmentOutlined /> {personal.contact.location}</Text>
                </Paragraph>
              </Space>

              <Divider />

              <Space orientation="vertical" size="small" style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Research Focus</Text>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {personal.researchFocus.map((item, idx) => (
                    <li key={idx}><Text>{item}</Text></li>
                  ))}
                </ul>
              </Space>

              <Divider />

              <Space orientation="vertical" size="small" style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Technical Skills</Text>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {personal.technicalSkills.map((skill, idx) => (
                    <li key={idx}><Text>{skill}</Text></li>
                  ))}
                </ul>
              </Space>

              <Divider />

              <Space orientation="vertical" size="small" style={{ width: '100%', textAlign: 'left' }}>
                <Text strong>Languages</Text>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {personal.languages.map((lang, idx) => (
                    <li key={idx}><Text>{lang.language} — {lang.level}</Text></li>
                  ))}
                </ul>
              </Space>
            </Space>
          </Card>
        </Col>

        {/* Main Content */}
        <Col xs={24} md={16}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            {/* Education */}
            <Card hoverable>
              <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                <Title level={4} style={{ margin: 0 }}>Education</Title>
                {thesis && (
                  <Space orientation="vertical" size={0}>
                    <Text strong>PhD in Business Economics — {thesis.venue}</Text>
                    <Text type="secondary">{new Date(thesis.date).getFullYear()}</Text>
                    <Text>{thesis.title}</Text>
                    {thesis.promotors && (
                      <Text type="secondary" italic>(Co-)Supervisors: {thesis.promotors}</Text>
                    )}
                  </Space>
                )}
              </Space>
            </Card>

            {/* Positions */}
            <Card hoverable>
              <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                <Title level={4} style={{ margin: 0 }}>Positions</Title>
                <Space orientation="vertical" size="small">
                  {personal.positions.map((pos, idx) => (
                    <Text key={idx} strong>{pos.title}</Text>
                  ))}
                </Space>
              </Space>
            </Card>

            {/* Selected Publications */}
            <Card hoverable>
              <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                <Title level={4} style={{ margin: 0 }}>Publications (Recent)</Title>
                {featuredPubs.map((pub) => (
                  <Space key={pub.id} orientation="vertical" size={0}>
                    <Text strong>{pub.title}</Text>
                    <Text type="secondary">{pub.authors.join(', ')} — {pub.venue} ({pub.year})</Text>
                  </Space>
                ))}
              </Space>
            </Card>

            {/* Talks */}
            <Card hoverable>
              <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                <Title level={4} style={{ margin: 0 }}>Talks (Recent)</Title>
                {recentTalks.map((talk) => (
                  <Space key={talk.id} orientation="vertical" size={0}>
                    <Text strong>{talk.title}</Text>
                    <Text type="secondary">
                      {talk.type} — {talk.event} —{' '}
                      {new Date(talk.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </Text>
                  </Space>
                ))}
              </Space>
            </Card>

            {/* Teaching */}
            <Card hoverable>
              <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                <Title level={4} style={{ margin: 0 }}>Teaching</Title>
                {currentTeaching.map((teaching) => (
                  <Space key={teaching.id} orientation="vertical" size={0}>
                    <Text strong>{teaching.role} — {teaching.course}</Text>
                    <Text type="secondary">
                      {teaching.institution} — {teaching.startYear}–{teaching.endYear || 'present'}
                    </Text>
                  </Space>
                ))}
                {guestLectures.slice(0, 3).map((lecture) => (
                  <Space key={lecture.id} orientation="vertical" size={0}>
                    <Text strong>Guest Lecture — {lecture.course}</Text>
                    <Text type="secondary">{lecture.institution} — {lecture.year}</Text>
                  </Space>
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
