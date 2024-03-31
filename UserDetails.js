// UserDetails.js
import React from 'react';

const UserDetails = ({ formData, onChange }) => {
  return (
    <div>
      <h2>User Details</h2>
      <input type="text" name="firstName" value={formData.firstName} onChange={onChange} placeholder="First Name" />
      <input type="text" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Last Name" />
      <input type="date" name="dob" value={formData.dob} onChange={onChange} placeholder="Date of Birth" />
    </div>
  );
};

export default UserDetails;
