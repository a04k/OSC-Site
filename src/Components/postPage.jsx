import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../static/postdata.js'; 
import '../assets/stylesheets/postPage.css';
import corvette from '../assets/images/corvette.jpg';

const PostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = posts.find(p => p.slug === slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    
    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <article className="post-page">
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            {post.author} · {post.date}
          </div>
        </header>
        <div className="post-image">
          <img src={corvette} alt={post.title} />
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.post }} />
      </article>
    </main>
  );
};

export default PostPage;