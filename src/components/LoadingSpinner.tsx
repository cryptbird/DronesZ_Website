import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="drone-spinner">
        <div className="rotor rotor-1"></div>
        <div className="rotor rotor-2"></div>
        <div className="rotor rotor-3"></div>
        <div className="rotor rotor-4"></div>
        <div className="center-hub"></div>
      </div>
      <p className="loading-text">Initializing DroneZ Systems...</p>
    </div>
  );
};

export default LoadingSpinner; 