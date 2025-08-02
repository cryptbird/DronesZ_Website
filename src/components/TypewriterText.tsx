import React, { useState, useEffect } from 'react';
import './TypewriterText.css';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText('');
    }, delay);

    return () => clearTimeout(initialTimer);
  }, [delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypewriterText; 