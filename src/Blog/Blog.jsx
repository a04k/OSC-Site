import PostCard from '../Components/postCard.jsx'
import PostPage from '../Components/postPage.jsx'
import '../assets/stylesheets/blog.css'

// const blogData = [
//   {
//     id: 1,
//     title: 'Sample Post 1',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: '2024-02-16',
//   },
//   {
//     id: 2,
//     title: 'Sample Post 2',
//     content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
//     date: '2024-02-17',
//   },
//   // FOR TESTING PURPOSES
// ];
// 
const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>Latest Posts</h1> 
      </div>
      {/* <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard /> */}
      <PostCard />

      {/* <PostPage /> */}
      <PostCard />
      <PostCard /> 

      <PostPage />
    </div>
  );
};

export default BlogPage;
