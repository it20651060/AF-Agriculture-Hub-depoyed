import React, { useEffect, useState } from 'react';
import './Card.css';

const FarmCard = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://finaldeploye.onrender.com/farmerproduct/')
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <div>
      {productData.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <h2>{item.pName}</h2>
          </div>
          <div className="card-body">
            <p><strong>Price:</strong> {item.pPrice}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Details:</strong> {item.details}</p>
            <div className="card-image">
            <img src={item.images} alt="Product" style={{ width: '150px', height: 'auto' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmCard;
