import {useEffect, useState} from 'react';
import PostCard from '../Components/postCard.jsx';
import PostPage from '../Components/postPage.jsx';
import '../assets/stylesheets/blog.css';

const BlogPage = () => {
  
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.example.com/posts')
  //     .then(response => response.json())
  //     .then(data => setPosts(data))
  //     .catch(error => console.error('Error fetching posts:', error));
  // }, []);
  
  
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>Latest Posts</h1> 
      </div>
      
        {/*posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            author={post.author}
            description={post.description}
            postDate={post.date} 
            link={`/posts/${post.id}`}
          />
        ))*/}
      
      <PostCard
        title="A Sample Title for a Blog Post" 
        author="Ammarr Elsaied" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe eos dolorum aliquam suscipit ipsum atque deserunt alias dicta itaque illo a fuga nihil corporis perspiciatis ea, impedit ullam soluta?" 
        postDate="21/08"
        link="/post/1" /* Add a specific link to the post page */
      />
      <PostCard
        title="Another Blog Post"
        author="Jane Doe"
        description="Another description here..."
        postDate="17:00 PM"
        link="/post/2"
      />
      <PostCard
        title="Another Blog Post"
        author="Jane Doe"
        description="Another description here..."
        postDate="17:00 PM"
        link="/post/2"
      />
    </div>
  );
};

export default BlogPage;
