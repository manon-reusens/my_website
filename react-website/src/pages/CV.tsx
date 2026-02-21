import React from 'react';
import { Card } from 'antd';
import { MailOutlined, LinkedinOutlined, GithubOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { websiteConfig } from '../data/config';
import { publicationsData, PublicationsAPI } from '../data/publications';
import { TalksAPI } from '../data/talks';
import { TeachingAPI } from '../data/teaching';
import './CV.css';

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
    { href: personal.contact.scholar, icon: <GithubOutlined />, label: 'Scholar' },
    { href: personal.contact.github, icon: <GithubOutlined />, label: 'GitHub' },
  ];

  return (
    <div className="cv-page container">
      <section className="section-header">
        <h2>Curriculum Vitae</h2>
      </section>

      <div className="cv-grid fade-in-up">
        {/* Sidebar */}
        <aside>
          <Card className="cv-sidebar">
            <div className="cv-profile">
              <img
                className="profile-image"
                src={`/${personal.profileImage}`}
                alt={`Portrait of ${personal.name}`}
              />
              <h3>{personal.name}</h3>
              <p className="muted">{personal.title}</p>
            </div>

            <hr className="cv-divider" />

            <div className="cv-section-small">
              <h4>Contact</h4>
              <ul className="cv-contact-icons">
                {contactIcons.map((contact, idx) => (
                  <li key={idx}>
                    <a
                      href={contact.href}
                      className="cv-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={contact.label}
                    >
                      {contact.icon}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="cv-contact-list">
                <li>{personal.contact.email}</li>
                <li>
                  <EnvironmentOutlined /> {personal.contact.location}
                </li>
              </ul>
            </div>

            <hr className="cv-divider" />

            <div className="cv-section-small">
              <h4>Research Focus</h4>
              <ul className="cv-list">
                {personal.researchFocus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <hr className="cv-divider" />

            <div className="cv-section-small">
              <h4>Technical Skills</h4>
              <ul className="cv-list">
                {personal.technicalSkills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>

            <hr className="cv-divider" />

            <div className="cv-section-small">
              <h4>Languages</h4>
              <ul className="cv-list">
                {personal.languages.map((lang, idx) => (
                  <li key={idx}>
                    {lang.language} — {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </aside>

        {/* Main Content */}
        <section>
          {/* Education */}
          <Card className="cv-section">
            <h3>Education</h3>
            {thesis && (
              <div className="cv-item">
                <div>
                  <strong>PhD in Business Economics — {thesis.venue}</strong>
                </div>
                <div className="muted">{new Date(thesis.date).getFullYear()}</div>
                <div>{thesis.title}</div>
                {thesis.promotors && (
                  <div className="muted" style={{ fontStyle: 'italic' }}>
                    (Co-)Supervisors: {thesis.promotors}
                  </div>
                )}
              </div>
            )}
          </Card>

          {/* Positions */}
          <Card className="cv-section">
            <h3>Positions</h3>
            {personal.positions.map((pos, idx) => (
              <div key={idx} className="cv-item">
                <strong>{pos.title}</strong>
              </div>
            ))}
          </Card>

          {/* Selected Publications */}
          <Card className="cv-section">
            <h3>Selected Publications</h3>
            {featuredPubs.map((pub) => (
              <div key={pub.id} className="cv-item">
                <div>
                  <strong>{pub.title}</strong>
                </div>
                <div className="muted">
                  {pub.authors.join(', ')} — {pub.venue} ({pub.year})
                </div>
              </div>
            ))}
          </Card>

          {/* Talks */}
          <Card className="cv-section">
            <h3>Talks (Recent)</h3>
            {recentTalks.map((talk) => (
              <div key={talk.id} className="cv-item">
                <div>
                  <strong>{talk.title}</strong>
                </div>
                <div className="muted">
                  {talk.type} — {talk.event} —{' '}
                  {new Date(talk.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                  })}
                </div>
              </div>
            ))}
          </Card>

          {/* Teaching */}
          <Card className="cv-section">
            <h3>Teaching</h3>
            {currentTeaching.map((teaching) => (
              <div key={teaching.id} className="cv-item">
                <div>
                  <strong>
                    {teaching.role} — {teaching.course}
                  </strong>
                </div>
                <div className="muted">
                  {teaching.institution} — {teaching.startYear}–
                  {teaching.endYear || 'present'}
                </div>
              </div>
            ))}
            {guestLectures.slice(0, 3).map((lecture) => (
              <div key={lecture.id} className="cv-item">
                <div>
                  <strong>Guest Lecture — {lecture.course}</strong>
                </div>
                <div className="muted">
                  {lecture.institution} — {lecture.year}
                </div>
              </div>
            ))}
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CV;
