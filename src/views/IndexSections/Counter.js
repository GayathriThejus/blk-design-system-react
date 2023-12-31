import React, { useEffect, useState, useRef } from 'react';

const Counter = () => {
  const [counts, setCounts] = useState({
    iedc: 0,
    innovators: 29675,
    changemakers: 2975,
    days: 0,
    challenges: 0,
  });

  const finalCountsRef = useRef({
    iedc: 375,
    innovators: 30000,
    changemakers: 3000,
    days: 100,
    challenges: 3,
  });

  useEffect(() => {
    const intervals = {
      iedc: setInterval(() => incrementCount('iedc'), 0.01),
      innovators: setInterval(() => incrementCount('innovators'), 0.01),
      changemakers: setInterval(() => incrementCount('changemakers'), 0.01),
      days: setInterval(() => incrementCount('days'), 4),
      challenges: setInterval(() => incrementCount('challenges'), 30),
    };

    
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  const incrementCount = (key) => {
    setCounts(prevCounts => {
      const newCounts = {
        ...prevCounts,
        [key]: Math.min(prevCounts[key] + 1, finalCountsRef.current[key]),
      };

      return newCounts;
    });
  };

  const counterStyle = {
    fontSize: '2rem',
    
  };
  const boxStyle = {
   
    width: '220px', 
    height: '50px', 
    display: 'inline-block',
    marginRight: '5px',

  };

  return (
    <div className="counter" style={counterStyle}>
      <div class="btn-group custom-bg-subtle-dark bg-body"  role="group" aria-label="Counters">
        <div style={boxStyle}><p className="text-danger"><span>{counts.iedc}+</span> <br/><h6>IEDCs</h6></p></div>
        <div style={boxStyle}><p className="text-danger"><span>{counts.innovators}+</span> <h6>Innovators</h6></p></div>
        <div style={boxStyle}><p className="text-danger"><span>{counts.changemakers}+</span><h6> Changemakers</h6></p></div>
        <div style={boxStyle}><p className="text-danger"><span>{counts.days}+</span> <h6>Days</h6></p></div>
        <div style={boxStyle}><p className="text-danger"><span>{counts.challenges}+</span><h6> Challenges</h6></p></div>
      </div>
    </div>
  );
  
};

export default Counter;
