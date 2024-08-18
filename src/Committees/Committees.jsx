import '../assets/stylesheets/committees.scss';

const Committees = () => {
  return (
    <div className="committeesPage">
      <div className="title">
        <h1>Our Committees</h1>
      </div>
      <div className="grid">
        <div className="card webCard">
          <h2>Web Committee</h2>
          <p>Description for Web Committee</p>
        </div>
        <div className="card hrCard">
          <h2>Human Resources</h2>
          <p>Description for Human Resources</p>
        </div>
        <div className="card prCard">
          <h2>Public Relations</h2>
          <p>Description for Public Relations</p>
        </div>
        <div className="card linuxCard">
          <h2>Linux</h2>
          <p>Description for Linux</p>
        </div>
        <div className="card blenderCard">
          <h2>Blender</h2>
          <p>Description for Blender</p>
        </div>

        <div className="card gameCard">
          <h2>Game Committee</h2>
          <p>Description for Game Committee</p>
        </div>
        <div className="card uiCard">
          <h2>UI/UX</h2>
          <p>Description for UI/UX</p>
        </div>
        <div className="card flutterCard">
          <h2>Flutter</h2>
          <p>Description for Flutter</p>
        </div>
        <div className="card stCard">
          <h2>Science & Tech</h2>
          <p>Description for Science & Tech</p>
        </div>
        <div className="card ccCard">
          <h2>Content Creation</h2>
          <p>Description for Content Creation</p>
        </div>
      </div>
    </div>
  );
};

export default Committees;
