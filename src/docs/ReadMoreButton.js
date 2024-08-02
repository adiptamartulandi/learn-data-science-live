import React from 'react';

const ReadMoreButton = ({ url }) => (
  <div style={{ textAlign: 'left', marginTop: '20px' }}>
    <a 
      href={url} 
      target="_blank" 
      style={{ 
        display: 'inline-block', 
        padding: '10px 20px', 
        backgroundColor: '#2eb317', 
        color: '#ffffff', 
        borderRadius: '5px', 
        textDecoration: 'none', 
        fontSize: '14px' 
      }}
    >
      Read More
    </a>
  </div>
);

export default ReadMoreButton;