import { useState } from 'react';
import PostCard from '../Components/postCard.jsx';
import { posts } from '../static/postdata.js';
import '../assets/stylesheets/blog.css';

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(prevCount => Math.min(prevCount + 5, posts.length));
    /* 
    the math min is only here to prevent us going above the actual posts count
    (does nothing until we reach the actual max count)
    */
  };

  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>Latest Posts</h1> 
      </div>
      
      {posts.slice(0, visiblePosts).map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author}
          description={post.description}
          postDate={post.date}
          link={`/posts/${post.slug}`}
        />
      ))}

      { visiblePosts < posts.length && (
        <button className="read-more-button" onClick={loadMorePosts}>
          Read More
        </button>
      )}
        {/* Only Renders the button when there are more posts that are not yet displayed. */}
      
    </div>
  );
};

export default BlogPage;