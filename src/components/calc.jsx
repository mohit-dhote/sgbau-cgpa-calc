import React, { useState } from 'react';
import Temp from './Temp1';
import "../components/calc.css";

const calc = () => {
  return (
<>
  <h2 id="heading-cal">CGPA Calculator</h2>
  <div className="container">
    {Array.from({ length: 8 }, (_, i) => (
      <Temp key={i} sem={i + 1} />
    ))}
  </div>
</>
  );
};

export default calc;
