// ResetButton.js
import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button type="button" onClick={onReset}>Reset</button>
  );
};

export default ResetButton;
