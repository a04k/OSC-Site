import { Link } from "react-router-dom";
import "../assets/stylesheets/postCard.css";
import corvette from '../assets/images/corvette.jpg';  

export default function PostCard({
  title,
  author,
  description,
  postDate,
  link,
}) {
  return (
    <Link to={link} className="postCard">
      <div className="image">
        <img src={corvette}  />
      </div>
      <div className="post-body">
        <h2 className="post-title">{title}</h2>
        <p className="author-date-info">
          {author}, {postDate}
        </p>
        <p className="post-description">{description}</p>
      </div>
      <div className="arr"></div>
    </Link>
  );
}
