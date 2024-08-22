// import React from 'react'
import '../assets/stylesheets/postCard.css'

export default function post() {
  return (
    <div className='postCard'>
      <div className="image">
        <img src="src/assets/images/chevrolet_corvette.jpg" alt="" />
      </div>
      <div className="body">
        <h2 className='ttl'>
          A Sample post for the blog
        </h2>
        <p className="info">Ammarr Elsaied 16:35 PM</p>
        {/* the author and the time ^ */}
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe eos dolorum aliquam suscipit ipsum atque deserunt alias dicta itaque illo a fuga nihil corporis perspiciatis ea, impedit ullam soluta?
        </p>
        {/* the post breif ^ */}
      </div>
    </div>
  )
}
