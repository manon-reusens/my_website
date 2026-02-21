import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Tag, Typography, Space, Divider, Avatar } from 'antd';
import { 
  ArrowLeftOutlined, 
  CalendarOutlined, 
  ClockCircleOutlined,
  UserOutlined,
  TagsOutlined
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { BlogsAPI } from '../data/blogs';
import './BlogPost.css';
import './BlogEnhancements.css';
import 'highlight.js/styles/github-dark.css';

const { Title, Paragraph, Text } = Typography;

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const blog = id ? BlogsAPI.getById(id) : undefined;

  if (!blog) {
    return (
      <Card style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', padding: '60px 20px' }}>
        <Space direction="vertical" size="large">
          <Title level={3}>Blog Post Not Found</Title>
          <Paragraph type="secondary">
            The blog post you're looking for doesn't exist or has been removed.
          </Paragraph>
          <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => navigate('/blog')}>
            Back to Blog
          </Button>
        </Space>
      </Card>
    );
  }

  const relatedPosts = BlogsAPI.getSortedByDate()
    .filter(post => post.id !== blog.id && post.tags.some(tag => blog.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="blog-post-container">
      {/* Back Button */}
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/blog')}
        style={{ marginBottom: 24 }}
      >
        Back to Blog
      </Button>

      {/* Main Content Card */}
      <Card className="blog-post-card">
        {/* Header */}
        <div className="blog-post-header">
          {blog.category && (
            <Tag color="purple" style={{ marginBottom: 16 }}>
              {blog.category}
            </Tag>
          )}
          
          <Title level={1} className="blog-post-title">
            {blog.title}
          </Title>
          
          {/* Meta Information */}
          <Space size="large" wrap className="blog-post-meta">
            <Space>
              <Avatar icon={<UserOutlined />} size="small" />
              <Text>{blog.author}</Text>
            </Space>
            <Space>
              <CalendarOutlined />
              <Text>
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </Text>
            </Space>
            {blog.readTime && (
              <Space>
                <ClockCircleOutlined />
                <Text>{blog.readTime}</Text>
              </Space>
            )}
          </Space>

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <Space size={[0, 8]} wrap>
                <TagsOutlined style={{ color: '#8c8c8c' }} />
                {blog.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
            </div>
          )}
        </div>

        <Divider />

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="blog-post-cover">
            <img src={blog.coverImage} alt={blog.title} />
          </div>
        )}

        {/* Excerpt */}
        <Paragraph className="blog-post-excerpt" style={{ fontSize: '1.1em', color: '#595959' }}>
          {blog.excerpt}
        </Paragraph>

        <Divider />

        {/* Markdown Content */}
        <div className="blog-post-content markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={{
              h1: ({ children }) => <Title level={2}>{children}</Title>,
              h2: ({ children }) => <Title level={3}>{children}</Title>,
              h3: ({ children }) => <Title level={4}>{children}</Title>,
              h4: ({ children }) => <Title level={5}>{children}</Title>,
              p: ({ children }) => <Paragraph>{children}</Paragraph>,
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </Card>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Card 
          className="related-posts-card"
          title={
            <Space>
              <TagsOutlined />
              <span>Related Posts</span>
            </Space>
          }
        >
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                size="small"
                hoverable
                onClick={() => navigate(`/blog/${post.id}`)}
                className="related-post-card"
              >
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title level={5} style={{ margin: 0 }}>{post.title}</Title>
                    {post.category && <Tag color="blue">{post.category}</Tag>}
                  </div>
                  <Text type="secondary" style={{ fontSize: '0.9em' }}>
                    {post.excerpt}
                  </Text>
                  <Space size="middle">
                    <Text type="secondary" style={{ fontSize: '0.85em' }}>
                      <CalendarOutlined /> {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </Text>
                    {post.readTime && (
                      <Text type="secondary" style={{ fontSize: '0.85em' }}>
                        <ClockCircleOutlined /> {post.readTime}
                      </Text>
                    )}
                  </Space>
                </Space>
              </Card>
            ))}
          </Space>
        </Card>
      )}

      {/* Bottom Navigation */}
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <Button 
          type="primary" 
          size="large"
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate('/blog')}
        >
          Back to All Posts
        </Button>
      </div>
    </div>
  );
};

export default BlogPost;
