import React from 'react';
import './ab.css';


const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
<>




<h1>{/* */}</h1> 
    <div className="card">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="a">
        <div className="b">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="a">
        {tags.map((tag, index) => (
          <span key={index} className="c">
          #{tag}
        </span>
        ))}
      </div>
    </div>
    </>
  )
}

export default ImageCard;
