import React from 'react';

const styles = {
  border: '1px solid #545454',
  margin: '10px',
  padding: '15px',
  width: '100px'
};

export default grill => (
  <div style={styles} key={grill.name}>
    <h3>{grill.name}</h3>
    <h4>Description</h4>
    <p>Size: {grill.size}<br/>Fuel: {grill.fuel}<br/>Price: {grill.price}</p>
  </div>
)
