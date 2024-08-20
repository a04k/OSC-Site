import '../assets/stylesheets/postPage.css'

export default function postPage() {
  return (
    <div className='mainPost'>
      <table>
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
      </table>
    </div>
  )
}

