import '../assets/stylesheets/postPage.css' 
// import '../assets/stylesheets/postCard.css' 


export default function postPage() {
  return (
    <div className='mainPost'>
      <div className="postTitle">
        <h1>Post Title</h1>
      </div>
      <div className='imgAuthor'> 
        <div className="postImage">
          <img className='postImage' src="/src/assets/images/chevrolet_corvette.jpg" alt="" />
        </div>
        <div className='info'>
          Author: Ammarr Elsaied
          <br />
          Date: anything 
        </div>
      </div>
      <div className="postData">
        <p className='postBody'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error!
        </p>
      </div>

      {/* <table>
        <tr>
          <td>
            <img className='postImage' src="/src/assets/images/chevrolet_corvette.jpg" alt="" />
          </td>
          <td rowSpan={2}>
            <p className='postBody'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum expedita culpa cupiditate corporis optio esse. Illum minima neque, reiciendis id ipsam quia numquam, iste laudantium perspiciatis repudiandae maxime quis error!
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className='moreInfo'>
              Ammarrs Elsaied
              <a href="">
                <img src="" alt="" />
              </a>
            </p>
          </td>
        </tr>
      </table> */}
    </div>
  )
}

