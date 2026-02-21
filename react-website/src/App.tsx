import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useTheme } from './hooks/useTheme';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Talks from './pages/Talks';
import Teaching from './pages/Teaching';
import CV from './pages/CV';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { lightTheme, darkTheme } from './utils/theme';
import './App.css';
import './styles.css';

function App() {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
