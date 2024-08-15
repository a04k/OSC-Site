import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Committees from './committees';

export default function App () {
  return (
    <Router>
    <Routes>
      <Route index element = {<Home/>}/>
      <Route path = "/blog" element = {<Blog/>}/>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/committees" element = {<Committees/>}/>
    </Routes>
    </Router>
  );
}

