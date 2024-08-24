import { Link } from 'react-router-dom';
import PostCard from '../Components/postCard.jsx';
import { posts } from '../static/postdata.js';
import '../assets/stylesheets/blog.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>Latest Posts</h1> 
      </div>
      
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author}
          description={post.description}
          postDate={post.date}
          link={`/posts/${post.slug}`}
        />
      ))}
    </div>
  );
};

export default BlogPage;