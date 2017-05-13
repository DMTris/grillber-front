import React from 'react';

const styles = {
  border: '1px solid #545454',
  margin: '10px',
  padding: '15px',
  width: '100px'
};

export default appointment => (
  <div style={styles} key={appointment.renter.name}>
    <h3>{appointment.renter.name}</h3>
    <h4>Summary</h4>
    <p>Grill: {appointment.grill.name}<br/>Location: {appointment.location}<br/>Status: {appointment.status}</p>
  </div>
)
