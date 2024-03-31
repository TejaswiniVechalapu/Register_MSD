// App.js
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import ContactInformation from './ContactInformation';
import AddressForm from './AddressForm';
import SubmitButton from './SubmitButton'
import ResetButton from './ResetButton';
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phoneNumber: '',
    linkedin: '',
    address: {
      doorNo: '',
      streetName: '',
      streetName2: '',
      city: '',
      state: '',
      country: '',
      pinCode: ''
    }
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleReset = () => {
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phoneNumber: '',
      linkedin: '',
      address: {
        doorNo: '',
        streetName: '',
        streetName2: '',
        city: '',
        state: '',
        country: '',
        pinCode: ''
      }
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <UserDetails formData={formData} onChange={handleFormChange} />
        <ContactInformation formData={formData} onChange={handleFormChange} />
        <AddressForm formData={formData.address} onChange={handleAddressChange} />
        <SubmitButton />
        <ResetButton onReset={handleReset} />
      </form>
    </div> 
  );
}

export default App;
