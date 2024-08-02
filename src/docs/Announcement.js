import React from 'react';

const Announcement = ({ text }) => (
  <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '8px 12px', borderRadius: '8px', borderBottom: '2px solid #155724', fontSize: '14px', lineHeight: '1.5' }}>
    {text}
  </div>
);

export default Announcement;
