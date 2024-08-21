import '../assets/stylesheets/postPage.css' 
// import '../assets/stylesheets/postCard.css' 


export default function postPage() {
  return (
    <main>
      <div className='mainPost'>
      <div className="postTitle">
        <h1 className='ttl'>Post Title</h1>
      </div>
      <div className='imgAuthor'> 
        <div className="info">
          <div  className="publisher">

          <div className='Author box'>
            Author: Ammarr Elsaied
          </div>
          <div className="date , box">
            Date: 2022-01-01, 5 min Read
          </div>
          {/* <div className="date , box">
            5min Read
          </div> */}
          </div>
        </div>
        <div className="postImage">
          {/* <img className='postImage' src="/src/assets/images/chevrolet_corvette.jpg" alt="" /> */}
        </div>
      </div>
      <div className="postData">
        <p className='postBody'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error!
        </p>
      </div>
      </div>
    </main>
  )
}

