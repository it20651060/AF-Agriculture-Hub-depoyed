import React, { useEffect, useState } from 'react';
import './Card.css';

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://finaldeploye.onrender.com/news/')
      .then(response => response.json())
      .then(data => setNewsData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {newsData.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <h2>{item.title}</h2>
          </div>
          <div className="card-body">
            <p><strong>Post Date:</strong> {item.postDate}</p>
            <p><strong>News:</strong> {item.news}</p>
            <p><strong>Comments:</strong> {item.comments}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
