import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
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
import { ScrollToTop } from './ScrollToTop';


function AppContent() {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Router>
        <ScrollToTop />
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
