import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog/Blog'; 
import PostPage from './Components/postPage';  
import Committees from './Committees/Committees';
import About from './About';
import Layout from './Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />  
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
