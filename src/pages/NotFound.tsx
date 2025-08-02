import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <motion.div 
          className="not-found-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Crashed Drone Animation */}
          <motion.div 
            className="crashed-drone"
            initial={{ rotate: 0, y: -100 }}
            animate={{ rotate: 15, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="drone-body">
              <div className="drone-arm arm-1"></div>
              <div className="drone-arm arm-2"></div>
              <div className="drone-arm arm-3"></div>
              <div className="drone-arm arm-4"></div>
              <div className="drone-center"></div>
            </div>
            <div className="crash-effect"></div>
          </motion.div>

          {/* Lost Signal Text */}
          <motion.h1 
            className="lost-signal-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <WifiOff className="signal-icon" />
            Lost Signal
          </motion.h1>

          <motion.p 
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            The page you're looking for seems to have flown away.
            <br />
            Error 404 - Page Not Found
          </motion.p>

          {/* Navigation Buttons */}
          <motion.div 
            className="navigation-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-secondary"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </motion.div>

          {/* Signal Recovery Animation */}
          <motion.div 
            className="signal-recovery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Wifi className="recovery-icon" />
            <span>Attempting to reconnect...</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 