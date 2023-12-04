import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://finaldeploye.onrender.com/agrirule/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header">
          <h2>{"R" + ("00" + (index + 1)).slice(-3)}</h2>
          </div>
          <div className="card-body">
            <p><strong>Rule Name:</strong> {item.rName}</p>
            <p><strong>Rule Category:</strong> {item.rCategory}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Rule Details:</strong> {item.rDetails}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
