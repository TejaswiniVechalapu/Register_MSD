// ContactInformation.js
import React from 'react';

const ContactInformation = ({ formData, onChange }) => {
  return (
    <div>
      <h2>Contact Information</h2>
      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" />
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={onChange} placeholder="Phone Number" />
      <input type="text" name="linkedin" value={formData.linkedin} onChange={onChange} placeholder="Linkedin Address" />
    </div>
  );
};

export default ContactInformation;
