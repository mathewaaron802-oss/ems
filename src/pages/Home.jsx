import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div style={{ height: '400px', background: 'url(https://img.freepik.com/premium-photo/banner-group-business-people-meeting-conference-room-panorama-asian-businesspe-generative-ai_1259709-75522.jpg?w=2000)', backgroundSize: 'cover' }}></div>
      {/*section admin intro */}
      <div className="container my-5">
        <div className="row align-item-center">
          <div className="col-lg-6">
            {/*text content*/}
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia labore autem perspiciatis, iure modi. Eveniet incidunt cumque provident tenetur illo, atque, hic debitis placeat modi aspernatur, iste laudantium dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia labore autem perspiciatis, iure modi. Eveniet incidunt cumque provident tenetur illo, atque, hic debitis placeat modi aspernatur, iste laudantium dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia labore autem perspiciatis, iure modi. Eveniet incidunt cumque provident tenetur illo, atque, hic debitis placeat modi aspernatur, iste laudantium dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia labore autem perspiciatis, iure modi. Eveniet incidunt cumque provident tenetur illo, atque, hic debitis placeat modi aspernatur, iste laudantium dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia labore autem perspiciatis, iure modi. Eveniet incidunt cumque provident tenetur illo, atque, hic debitis placeat modi aspernatur, iste laudantium dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia labore autem perspiciatis, iure modi. Eveniet incidunt cumque provident tenetur illo, atque, hic debitis placeat modi aspernatur, iste laudantium dolorum!</p>
          </div>
          <div className="col-lg-6">
            {/* image */}
            <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkliIuVgejvDwavQJbzUFo2z99ptt-UGB43w&s" alt="profile" />
          </div>
        </div>
        <div className="text-center my-5">
         <Link to={'/admin'} className='btn btn-info'>GO TO DASHBOARD</Link>
        </div>
      </div>
    </div>
  )
}

export default Home