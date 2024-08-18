import '../assets/stylesheets/committees.scss';

const CommitteeCard = ({ href, link, name, info, className }) => {
  return (
    <a
      href={href}
      className={`committeeCard ${className}`}
      target={link}
      rel="noopener noreferrer"
    >
      <h2 className="committeeCard-title">
        {name}{" "}
        <span className="committeeCard-arrow">
          -&gt;
        </span>
      </h2>
      <p className="committeeCard-info">{info}</p>
    </a>
  );
};

export default CommitteeCard;
