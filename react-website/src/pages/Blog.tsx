import React, { useState } from 'react';
import { Card, Button, Tag, Row, Col, Typography, Space, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { 
  CalendarOutlined, 
  ClockCircleOutlined, 
  RocketOutlined,
  SearchOutlined,
  FireOutlined,
  BookOutlined,
  BulbOutlined,
  ExperimentOutlined
} from '@ant-design/icons';
import { BlogsAPI } from '../data/blogs';
import './Blog.css';
import './BlogEnhancements.css';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

const categoryIcons: Record<string, React.ReactNode> = {
  'General': <RocketOutlined />,
  'Research': <ExperimentOutlined />,
  'Tutorial': <BookOutlined />,
  'Academia': <BulbOutlined />
};

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const allBlogs = BlogsAPI.getSortedByDate();
  const categories = ['all', ...BlogsAPI.getAllCategories()];
  
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = filteredBlogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  return (
    <Space orientation="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
      {/* Header Section */}
      <div className="blog-header">
        <Space orientation="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
          <Title level={2}>
            <BookOutlined style={{ marginRight: 12 }} />
            Blog
          </Title>
          <Paragraph type="secondary" style={{ fontSize: '1.1em' }}>
            Thoughts on AI research, responsible AI, and the academic journey
          </Paragraph>
        </Space>
      </div>

      {/* Search and Filter Bar */}
      <Card className="filter-card">
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Search
            placeholder="Search blog posts..."
            prefix={<SearchOutlined />}
            size="large"
            allowClear
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ maxWidth: 500 }}
          />
          
          <Space wrap size="middle">
            <Text strong>Categories:</Text>
            {categories.map((category) => (
              <Button
                key={category}
                type={selectedCategory === category ? 'primary' : 'default'}
                onClick={() => setSelectedCategory(category || 'all')}
                icon={category !== 'all' && category ? categoryIcons[category] : undefined}
              >
                {category === 'all' ? 'All Posts' : category}
              </Button>
            ))}
          </Space>
        </Space>
      </Card>

      {/* Featured Posts */}
      {featuredBlogs.length > 0 && (
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FireOutlined style={{ color: '#ff4d4f', fontSize: 20 }} />
            <Title level={4} style={{ margin: 0 }}>Featured Posts</Title>
          </div>
          
          <Row gutter={[24, 24]}>
            {featuredBlogs.map((blog) => (
              <Col key={blog.id} xs={24} lg={12}>
                <Card 
                  hoverable
                  className="blog-card featured-blog-card"
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  cover={
                    blog.coverImage ? (
                      <div className="blog-card-image" style={{ 
                        backgroundImage: `url(${blog.coverImage})`,
                        height: 200,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }} />
                    ) : (
                      <div className="blog-card-placeholder" style={{ 
                        height: 200,
                        background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {categoryIcons[blog.category || 'General']}
                      </div>
                    )
                  }
                >
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Tag className='tag tag-primary' icon={<FireOutlined />}>Featured</Tag>
                      {blog.category && (
                        <Tag className='tag tag-secondary'>{blog.category}</Tag>
                      )}
                    </div>
                    
                    <Title level={4} className="blog-card-title">{blog.title}</Title>
                    
                    <Space size="middle" wrap>
                      <Text type="secondary">
                        <CalendarOutlined /> {new Date(blog.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </Text>
                      {blog.readTime && (
                        <Text type="secondary">
                          <ClockCircleOutlined /> {blog.readTime}
                        </Text>
                      )}
                    </Space>
                    
                    <Paragraph ellipsis={{ rows: 3 }} type="secondary">
                      {blog.excerpt}
                    </Paragraph>
                    
                    <Space size={[0, 8]} wrap>
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      )}

      {/* Regular Posts */}
      {regularBlogs.length > 0 && (
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          {featuredBlogs.length > 0 && (
            <Title level={4}>More Posts</Title>
          )}
          
          <Row gutter={[16, 16]}>
            {regularBlogs.map((blog) => (
              <Col key={blog.id} xs={24} sm={12} lg={8}>
                <Card 
                  hoverable
                  className="blog-card"
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {blog.category && (
                        <Tag className='tag tag-secondary' icon={categoryIcons[blog.category]}>
                          {blog.category}
                        </Tag>
                      )}
                      <Text type="secondary" style={{ fontSize: '0.85em' }}>
                        {new Date(blog.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </Text>
                    </div>
                    
                    <Title level={5} className="blog-card-title">{blog.title}</Title>
                    
                    {blog.readTime && (
                      <Text type="secondary" style={{ fontSize: '0.85em' }}>
                        <ClockCircleOutlined /> {blog.readTime}
                      </Text>
                    )}
                    
                    <Paragraph ellipsis={{ rows: 3 }} type="secondary" style={{ fontSize: '0.9em' }}>
                      {blog.excerpt}
                    </Paragraph>
                    
                    <Space size={[0, 8]} wrap>
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Tag key={tag} style={{ fontSize: '0.8em' }}>{tag}</Tag>
                      ))}
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      )}

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <Card style={{ textAlign: 'center', padding: '60px 20px' }}>
          <Space orientation="vertical" size="middle">
            <SearchOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
            <Title level={4}>No posts found</Title>
            <Text type="secondary">
              Try adjusting your search or filter to find what you're looking for.
            </Text>
            <Button type="primary" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
              Clear Filters
            </Button>
          </Space>
        </Card>
      )}
    </Space>
  );
};

export default Blog;
