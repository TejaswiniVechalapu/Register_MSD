// AddressForm.js
import React from 'react';

const AddressForm = ({ formData, onChange }) => {
  return (
    <div>
      <h2>Address</h2>
      <input type="text" name="doorNo" value={formData.doorNo} onChange={onChange} placeholder="Door No/Flat No" />
      <input type="text" name="streetName" value={formData.streetName} onChange={onChange} placeholder="Street Name" />
      <input type="text" name="streetName2" value={formData.streetName2} onChange={onChange} placeholder="Street Name2" />
      <input type="text" name="city" value={formData.city} onChange={onChange} placeholder="City" />
      <input type="text" name="state" value={formData.state} onChange={onChange} placeholder="State" />
      <input type="text" name="country" value={formData.country} onChange={onChange} placeholder="Country" />
      <input type="text" name="pinCode" value={formData.pinCode} onChange={onChange} placeholder="PIN Code" />
    </div>
  );
};

export default AddressForm;
